import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/offcanvas';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, {useState, useEffect, useContext } from 'react';
import Table from './Table';
import NewRequestModal from './NewRequestModal';
import SelectBox from './SelectBox';
import { AuthContext } from '../context/AuthContext';
import Toast from '../utils/Toast';

function RequestTable() {

    const [ show, setShow ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [filter, setFilter] = useState({ tipoRequerimiento: [], prioridad: [], estado: [] });
    const [solicitudes, setSolicitudes] = useState([]);
    const [filteredSolicitudes, setFilteredSolicitudes] = useState([]);
    const { authToken } = useContext(AuthContext);
    
    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:8080' + '/api/requerimientos/', { 
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authToken
            }
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data.status !== 'Success') throw new Error(data.message);
            setSolicitudes(data.data);
            setFilteredSolicitudes(data.data);
        })
        .catch((e)=> Toast({ icon: 'error', title: 'Ups!', text: 'Ha ocurrido un error: ' + e.mssage }))
        .finally(()=> setLoading(false));
    }, []);

    const handleNewRequest = () => {
        setShow(true);
    };

    const filterSolicitudes = () => {
        const filterableKeys = ['tipoRequerimiento', 'prioridad', 'estado']; // Claves correctas del objeto
    
        const activeFilters = Object.entries(filter)
            .filter(([key, values]) => filterableKeys.includes(key) && values.length > 0);
    
        if (!activeFilters.length) return solicitudes;
    
        return solicitudes.filter(solicitud =>
            activeFilters.every(([key, values]) =>
                values.includes(solicitud[key]) // Comparar directamente con la clave correcta
            )
        );
    };

    const changeFilter = (e) => {
        const value = e.target.value;
        const name = e.target.name; // 'tipoRequerimiento', 'prioridad', 'estado'
    
        let updatedFilter = { ...filter };
    
        if (value === "Todos") {
            updatedFilter[name] = []; // Eliminar filtro de esta categoría
        } else {
            if (!filter[name].includes(value)) {
                updatedFilter[name] = [...filter[name], value];
            }
        }
    
        setFilter(updatedFilter);
        const updatedSolicitudes = filterSolicitudes(); // Aplicar los filtros actualizados
        setFilteredSolicitudes(updatedSolicitudes);
    };

    const removeFilter = (tipo, filterName) => {
        const updatedFilter = {
            ...filter,
            [filterName]: filter[filterName].filter(item => item !== tipo)
        };
        setFilter(updatedFilter);
        const updatedSolicitudes = filterSolicitudes();
        setFilteredSolicitudes(updatedSolicitudes);
    };

    const showTags = (list, filterName) => {
        return list.map((tipo) => {
            if (tipo !== "Todos") {
                return (
                    <div key={tipo} style={styles.tag}>
                        {tipo}  
                        <span 
                            style={styles.removeTag}
                            onClick={() => removeFilter(tipo, filterName)}
                        >
                            ×
                        </span>
                    </div>
                );
            }
            return null;
        });
    };

    const styles = {
        tagContainer: {
            color: '#FFFFFF',
            minHeight: "50px"
        },
        tag: {
            padding: '8px 12px',
            backgroundColor: '#475BEB',
            color: '#FFFFFF',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            fontSize: '14px',
            margin: '5px'       // Add margin around tags
        },
        removeTag: {
            marginLeft: '8px',
            cursor: 'pointer',
            color: '#FFFFFF'      // Make the X visible
        }
    }

    return (
        <div className="container d-flex mt-2  gap-2 flex-column justify-content-start align-items-center vh-100 vw-auto">
            <div class="container row">
                <div class="col-3  d-flex container justify-content-start align-items-end">
                    <button type="button" className="btn btn-outline-primary   justify-content-center align-items-center" onClick={handleNewRequest}>Nueva Solicitud</button>
                </div>
                <div class="container col-9 row gap-3  ">
                    <div class="col">
                        <SelectBox handleChange={changeFilter} name={'tipoRequerimiento'} label="Tipo" options={[
                            { value: 'Todos', text: 'Todos' },
                            { value: 'Requerimiento Hardware', text: 'Requerimiento Hardware' },
                            { value: 'Errores', text: 'Errores' },
                            { value: 'Gestión Operativa', text: 'Gestión Operativa' }
                        ]} />
                    </div>
                    <div class="col">
                        <SelectBox handleChange={changeFilter} name={'estado'} label="Estado" options={[
                            { value: 'Todos', text: 'Todos' },
                            { value: 'Abierto', text: 'Abierto' },
                            { value: 'Cerrado', text: 'Cerrado' },
                            { value: 'Pendiente', text: 'Pendiente' }
                        ]} />
                    </div>
                    <div class="col">
                        <SelectBox handleChange={changeFilter} name={'prioridad'} label="Prioridad" options={[
                            { value: 'Todos', text: 'Todos' },
                            { value: 'Baja', text: 'Baja' },
                            { value: 'Media', text: 'Media' },
                            { value: 'Alta', text: 'Alta' },
                            { value: 'Urgente', text: 'Urgente' }
                        ]} />
                    </div>
                </div>
            </div>
            <div className='container d-flex flex-row justify-content-end' style={styles.tagContainer}>

                {showTags(filter.prioridad, "prioridad")}
                {showTags(filter.tipoRequerimiento, "tipoRequerimiento")}
                {showTags(filter.estado, "estado")}
                
            </div>
            <div class="container d-flex mt-10 flex-column align-items-center gap-5  vh-auto justify-content-between">
                <Table solicitudes={filteredSolicitudes} />
            </div>
            { show && <NewRequestModal show={show} setShow={setShow} />}
        </div>   
    );
}

export default RequestTable;