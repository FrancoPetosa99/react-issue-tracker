import Swal from "sweetalert2";

function ConfirmModal(confirmCallback, {icon, title, text, confirmButtonText, cancelButtonText, showCancelButton}) {
    Swal.fire({
        title: title ? title : "¿Estás seguro?",
        text: text ? text : "Esta acción no se puede deshacer ¿Deseas continuar?",
        icon: icon ? icon : "warning",
        showCancelButton: showCancelButton !== 'False' ? true : false,
        // confirmButtonColor: "#3085d6",
        // cancelButtonColor: "#d33",
        confirmButtonText: confirmButtonText ? confirmButtonText : "Confirmar",
        cancelButtonText: cancelButtonText ? cancelButtonText : 'Cancelar'
    })
    .then((result) => {
        if (result.isConfirmed) confirmCallback();
    });
}

export default ConfirmModal;