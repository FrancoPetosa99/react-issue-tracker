import { useMemo } from "react";
import ConfirmModal from "../../../utils/ConfirmModal";
import { FaStar } from "react-icons/fa6";

function useConfig() {
    const columnsSchema = useMemo(
        () => [
            { header: "Nombre", accessorKey: "nombre" },
            { header: "Apellido", accessorKey: "apellido" },
            { header: "Email", accessorKey: "email" },
            { header: "Nombre Usuario", accessorKey: "nombreUsuario" },
            {
                header: "Destacado",
                accessorKey: "destacado",
                cell: ({ row }) => (
                    row.original.destacado ? <FaStar color="gold" /> : "❌"
                )
            },
            {
                header: "Acciones",
                cell: ({ row }) => (
                    <div style={{ display: 'flex', justifyContent:'space-evenly' }}>

                        <button
                            className="btn btn-primary btn-sm"
                            onClick={() => console.log(row.original)}
                        >
                            <i className="bi bi-eye-fill"></i>
                        </button>

                        <button 
                            className="btn btn-danger btn-sm"
                            onClick={() => ConfirmModal(() => console.log('Se ha eliminado el usuario'), {})}
                        >
                            <i className="bi bi-trash3-fill"></i>
                        </button>

                    </div>
                )
            }
        ],
        []
    );

    const pageSchema = useMemo(() => ({ pageSize: 10, pageIndex: 0 }), []);

    const filters = [
        {
          name: 'nombre',
          label: 'Nombre'
        },
        {
          name: 'apellido',
          label: 'Apellido'
        },
        {
          name: 'email',
          label: 'Email'
        },
        {
          name: 'nombreUsuario',
          label: 'Nombre Usuario'
        }
    ];

    return { columnsSchema, pageSchema, filters };
}

export default useConfig;