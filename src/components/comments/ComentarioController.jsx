import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useState } from 'react';
import createNewComentario from '../../services/createNewComentario';
import { AuthContext } from '../../context/AuthContext';
import Toast from '../../utils/Toast';

function ComentarioController({ comentarios, setComentarios, requerimientoId }) {

    const { authToken } = useContext(AuthContext);

    const [comentario, setComentario] = useState({
        descripcion: '',
        asunto: 'ASUNTO'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setComentario({
            ...comentario,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        createNewComentario(authToken, comentario, requerimientoId)
        .then((data) => {
            console.log(data);
            if (data.status !== 'Success') throw new Error(data.message);
            Toast({ icon: 'success', title: 'Comentario Registrado' });
            setComentarios([  data.data, ...comentarios ]);
            setComentario({ descripcion: '', asunto: "ASUNTO" });
        })
        .catch((e)=> Toast({ icon: 'error', title: 'Ups!', text: 'Ha ocurrido un error: ' + e.mssage }));
    };

    return (
        <div className="card p-3 my-3 border-0">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <textarea
                        id="descripcion"
                        name="descripcion"
                        className="form-control"
                        rows="3"
                        value={comentario.descripcion}
                        onChange={handleChange}
                        placeholder="Agregar comentario..."
                        required
                    />
                </div>
                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary">
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ComentarioController;