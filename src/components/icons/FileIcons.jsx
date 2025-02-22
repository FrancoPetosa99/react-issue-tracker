import React from 'react';

function FileIcons({ extension }) {

    if (extension ==='pdf') {
        
        return(<i style={pdfIconStyle} className="bi bi-file-earmark-pdf-fill ms-2"></i>);
    }

    if (extension ==='word') {
        
        return( <i style={wordIconStyle} className="bi bi-file-earmark-word-fill ms-2"></i>);
    }

    if (extension ==='xls') {
        
        return(<i style={spreadSheetIconStyle} className="bi bi-file-earmark-spreadsheet-fill ms-2"></i>);
    }

    return (<i className="bi bi-file-earmark me-2"></i>);

}

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

export default FileIcons;