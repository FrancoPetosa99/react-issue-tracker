import Swal from "sweetalert2";

function ValidationModal(errors) {
  Swal.fire({
    icon: "error",
    title: "Ups!",
    html: `
      <ul style="text-align: left; color: red;">
        ${errors.map((error) => `<li>${error}</li>`).join("")}
      </ul>
    `,
    confirmButtonColor: "#d33",
    confirmButtonText: "Entendido",
  });
};

export default ValidationModal;