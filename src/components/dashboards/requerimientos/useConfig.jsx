import { useContext, useMemo, useState } from "react";
import FormatDate from "../../../utils/FormatDate";
import AsignarPropietarioSelect from "../../modales/requerimientos/visualizarRequerimiento/AsignarPropietarioSelect";
import { AuthContext } from "../../../context/AuthContext";

function useConfig() {

    const { currentUser } = useContext(AuthContext);

    const [ showNewRequerimientoModal, setShowNewRequerimientoModal ] = useState(false);
    const [ showViewRequerimientoModal, setShowViewRequerimientoModal ] = useState(false);
    const [ selectedRequerimientoId, setSelectedRequerimientoId ] = useState(null);
    const [ data, setData ] = useState([ ]);

    const updateUsuarioPropietario = (rowId, label) => {

        setData((prevData) =>
            prevData.map((requerimiento) =>
                requerimiento.id === rowId
                    ? { 
                        ...requerimiento, 
                        usuarioPropietario: label, 
                        estado:'Asignado', 
                        canViewDetails: (currentUser.nombreUsuario === requerimiento.usuarioEmisor || currentUser.nombreUsuario === requerimiento.usuarioPropietario)
                    }
                    : requerimiento
            )
        );
    };

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
            { 
                header: "Tipo", 
                accessorKey: "tipoRequerimiento",
                filterFn: 'multiValueFilter'
            },
            { 
                header: "Categoria", 
                accessorKey: "categoriaRequerimiento",
                filterFn: 'multiValueFilter'
            },
            { 
                header: "Fecha Alta", 
                accessorKey: "createdAt",
                cell: ({ row }) => (FormatDate(row.original.createdAt))
            },
            { 
                header: "Estado", 
                accessorKey: "estado",
                filterFn: 'multiValueFilter'
            },
            { 
                header: "Propietario", 
                accessorKey: "usuarioPropietario",
                cell: ({ row }) => (
                    row.original.usuarioPropietario 
                    ? row.original.usuarioPropietario 
                    : <div style={{ display: 'flex', justifyContent:'space-evenly' }}>
                        <AsignarPropietarioSelect 
                            requerimientoId={row.original.id}
                            callback={(label) => updateUsuarioPropietario(row.original.id, label)}
                        />
                    </div>
                )
            },
            {
                header: " ",
                cell: ({ row }) => (
                    <div style={{ display: 'flex', justifyContent:'space-evenly' }}>
                        <button
                            disabled={row.original.canViewDetails ? false : true}
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

    return { 
        columnsSchema, 
        pageSchema,
        showNewRequerimientoModal,
        setShowNewRequerimientoModal,
        showViewRequerimientoModal,
        setShowViewRequerimientoModal,
        selectedRequerimientoId,
        data, 
        setData,
        updateUsuarioPropietario
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