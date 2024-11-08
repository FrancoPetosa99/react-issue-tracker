import Swal from "sweetalert2";

function WarningModal({icon, title, text, confirmButtonText}) {
    Swal.fire({
        title: title ? title : "",
        text: text ? text : "",
        icon: icon ? icon : "warning",
        showCancelButton: false,
        // confirmButtonColor: "#3085d6",
        // cancelButtonColor: "#d33",
        confirmButtonText: confirmButtonText ? confirmButtonText : "Entendido"
    });
}

export default WarningModal;