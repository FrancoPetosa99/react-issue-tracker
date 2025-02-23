import { useMemo, useState } from "react";
import FormatDate from "../../../utils/FormatDate";

function useConfig() {

    const [ showNewRequerimientoModal, setShowNewRequerimientoModal ] = useState(false);
    const [ showViewRequerimientoModal, setShowViewRequerimientoModal ] = useState(false);
    const [ selectedRequerimientoId, setSelectedRequerimientoId ] = useState(null); 

    const columnsSchema = useMemo(
        () => [
            { header: "Codigo", accessorKey: "codigo" },
            {
                header: "Prioridad", 
                accessorKey: "prioridad",
                cell: ({ row }) => (
                    <span 
                        className="badge text-white" 
                        style={{ ...getPriorityColor(row.original.prioridad), padding: "5px 10px", borderRadius: "5px" }}
                    >
                        {row.original.prioridad}
                    </span>
                )
            },
            { header: "Tipo", accessorKey: "tipoRequerimiento" },
            { header: "Categoria", accessorKey: "categoriaRequerimiento" },
            { 
                header: "Fecha Alta", 
                accessorKey: "createdAt",
                cell: ({ row }) => (FormatDate(row.original.createdAt))
            },
            {
                header: "Estado",
                accessorKey: "estado",
                cell: ({ row }) => (row.original.estado)
            },
            { 
                header: "Propietario", 
                accessorKey: "usuarioPropietario",
                cell: ({ row }) => (row.original.usuarioPropietario ? row.original.usuarioPropietario : 'N/A')
            },
            {
                header: " ",
                cell: ({ row }) => (
                    <div style={{ display: 'flex', justifyContent:'space-evenly' }}>
                        <button
                            className="btn btn-primary btn-sm"
                            onClick={() => {
                                setShowViewRequerimientoModal(true);
                                setSelectedRequerimientoId(row.original.id);
                            }}
                        >
                            <i className="bi bi-eye-fill"></i>
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
          name: 'tipoRequerimiento',
          label: 'Tipo'
        },
        {
          name: 'categoriaRequerimiento',
          label: 'Categoria'
        },
        {
          name: 'estado',
          label: 'Estado'
        }
    ];

    return { 
        columnsSchema, 
        pageSchema,
        filters,
        showNewRequerimientoModal,
        setShowNewRequerimientoModal,
        showViewRequerimientoModal,
        setShowViewRequerimientoModal,
        selectedRequerimientoId
    };
}

const getPriorityColor = (priority) => {
    const styles = {
        'Urgente': {
            backgroundColor: '#90000F'
        },
        'Alta': {
            backgroundColor: '#dc3545'
        },
        'Media': {
            backgroundColor: '#ff6b6b'
        },
        'Baja': {
            backgroundColor: '#ffb4b4'
        }
    };

    return styles[priority] || { backgroundColor: '#dc3545' };
};

export default useConfig;