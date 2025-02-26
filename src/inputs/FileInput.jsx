import { useRef, useState } from "react";
import { IoMdRemove } from "react-icons/io";
import Toast from "../utils/Toast";

function FileInput({ name, label, descripcion, required, showError, errorMessage, callback }) {

    const fileInputRef = useRef(null);

    const [ uploadedFiles, setUploadedFiles ] = useState([ ]);

    const handleClick = () => fileInputRef.current.click();
    
    const handleFileChange = async (event) => {

        const files = Array
        .from(event.target.files);

        if (files.some(file => !validExtensions.includes(file.name.split('.').pop()))) {
            return Toast({ icon: 'error', title: 'Extension invalida', text:'Solo se admiten extensions PDF, WORD o EXCEL'});
        }

        const newFiles = files
        .map(file => {
            return new Promise((resolve, reject) => {
                
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    resolve({
                        nombre: file.name,
                        extension: file.name.split('.').pop(),
                        contenido: reader.result
                    });
                };
    
                reader.onerror = error => reject(error);
            });
        });

        await Promise.all(newFiles)
        .then(results => {
            setUploadedFiles([...uploadedFiles, ...results]);
            callback([...uploadedFiles, ...results]);
        })
        .catch(error => console.error("Error al leer los archivos:", error));
    };

    const handleRemoveFile = (name) => {
        const filteredFiles = uploadedFiles.filter(file => file.nombre !== name)
        setUploadedFiles(filteredFiles);
        callback(filteredFiles);
    };

    const fileDropStyles = showError 
    ? 'file-drop-area border rounded d-flex flex-column align-items-center justify-content-center text-center p-3 border border-danger'
    : 'file-drop-area border rounded d-flex flex-column align-items-center justify-content-center text-center p-3';

    const labelStyles = showError
    ? 'mt-2 text-danger'
    : 'mt-2';

    const uploadFileIcon = showError
    ? 'bi bi-upload display-6 text-danger'
    : 'bi bi-upload display-6 text-primary';

    const uploadedFilesContainer = showError
    ? 'list-group mt-3 border border-danger'
    : 'list-group mt-3'
    
    return (
        <div className="container mb-3">
            <label className="form-label">
                {label} {required && <span className="text-danger">*</span>} {<small className="text-muted fs-7">{descripcion}</small>}
            </label>

            <div 
                className={fileDropStyles}
                onClick={handleClick}
            >
                <i className={uploadFileIcon}></i>
                <p className={labelStyles}>Haz clic o arrastra archivos aquí</p>
            </div>

            <input
                type="file"
                id={name}
                multiple
                ref={fileInputRef}
                className="d-none"
                onChange={handleFileChange}
            />

            {showError && <p className="text-danger mt-1">{errorMessage}</p>}

            {uploadedFiles.length > 0 && (
                <ul className={uploadedFilesContainer}>
                    {uploadedFiles.map((archivo) => (
                        <li key={archivo.nombre} className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <span>{archivo.nombre} <small className="text-muted">{archivo.extension}</small></span>
                                { archivo.extension === 'pdf' && <i style={pdfIconStyle} className="bi bi-file-earmark-pdf-fill ms-2"></i> }
                                { archivo.extension === 'doc' && <i style={wordIconStyle} className="bi bi-file-earmark-word-fill ms-2"></i> }
                                { archivo.extension === 'xls' && <i style={spreadSheetIconStyle} className="bi bi-file-earmark-spreadsheet-fill ms-2"></i> }
                            </div>
                            <button 
                                style={{ borderRadius: '50' }}
                                className="btn btn-danger btn-sm"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleRemoveFile(archivo.nombre);
                                    
                                }}
                            >
                                <IoMdRemove size={14} />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

const validExtensions = ['pdf', 'doc', 'xls'];

const pdfIconStyle = {
    fontSize: '24px',
    color: 'red'
};

const wordIconStyle = {
    fontSize: '24px',
    color: 'blue'
};

const spreadSheetIconStyle = {
    fontSize: '24px',
    color: 'green'
};

const styles = `
    .file-drop-area {
        border: 2px dashed #007bff;
        cursor: pointer;
        transition: all 0.3s;
    }
    .file-drop-area:hover {
        background-color: rgba(0, 123, 255, 0.1);
        border-color: #0056b3;
    }
`;

export default function StyledFileInput(props) {
    return (
        <>
            <style>{styles}</style>
            <FileInput {...props} />
        </>
    );
}