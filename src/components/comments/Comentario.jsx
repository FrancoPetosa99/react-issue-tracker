import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRegCircleUser } from "react-icons/fa6";
import FormatDateAndTime from '../../utils/FormatDateAndTime';

function Comentario({ comentario }) {
    return (
        <div className="card my-3 shadow-sm">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="d-flex align-items-center">
                        <FaRegCircleUser className="me-2 text-primary" size={24} />
                        <h6 className="mb-0">{comentario.emisor}</h6>
                    </div>
                    <small className="text-muted">{FormatDateAndTime(comentario.createdAt)}</small>
                </div>
                <p className="mb-0">{comentario.descripcion}</p>
            </div>
        </div>
    );
}

export default Comentario;