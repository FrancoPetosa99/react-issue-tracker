import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/offcanvas';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, {useState, useEffect} from 'react';
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";
import ViewRequestModal from './ViewRequestModal';
import { Modal } from 'bootstrap'; 

function Table({solicitudes}) {
    const [viewRequest, setViewRequest] = useState(false);
    const [selectedRequest, setSelectedRequest] = useState(null);

    useEffect(() => {
        if(viewRequest) {
            const modal = new Modal(document.getElementById('viewRequestModal'));
            modal.show();
            
            // Add event listener for modal close
            const modalElement = document.getElementById('viewRequestModal');
            modalElement.addEventListener('hidden.bs.modal', () => {
                setViewRequest(false);
            });
        }
    }, [viewRequest]);

    const handleViewRequest = (solicitud) => {
        setSelectedRequest(solicitud);
        setViewRequest(true);
    };

    const getPriorityColor = (priority) => {
        const styles = {
            urgente: {
                backgroundColor: '#90000F' // Darkest/most intense red
            },
            alta: {
                backgroundColor: '#dc3545' // Bright red
            },
            media: {
                backgroundColor: '#ff6b6b' // Medium red
            },
            baja: {
                backgroundColor: '#ffb4b4' // Light red
            }
        };

        return styles[priority?.toLowerCase()] || { backgroundColor: '#dc3545' };
    };

    return (
        <table className="table table-hover table-responsive info">
            {viewRequest && <ViewRequestModal solicitud={selectedRequest} />}
            <caption>Lista de Solicitudes</caption>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Fecha Alta</th>
                    <th scope="col">Codigo</th>
                    <th scope="col">Prioridad</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Asunto</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Propietario</th>
                    <th scope="col">Ver Detalle</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {solicitudes.map((solicitud) => (
                    <tr key={solicitud.num}>
                        <td>{solicitud.num}</td>
                        <td>{solicitud.date}</td>
                        <td>{solicitud.cod}</td>
                        <td style={getPriorityColor(solicitud.priority)}>
                            {solicitud.priority}
                        </td>
                        <td>{solicitud.tipo}</td>
                        <td>{solicitud.categoria}</td>
                        <td>{solicitud.subject}</td>
                        <td>{solicitud.state}</td>
                        <td>{solicitud.author}</td>
                        <td>
                            <button 
                                onClick={() => handleViewRequest(solicitud)} 
                                className="btn btn-outline-primary btn-sm"
                            >
                                <i className="bi bi-eye"></i>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;