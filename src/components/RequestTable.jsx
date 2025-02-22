import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/offcanvas';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Table from './Table';
import NewRequestModal from './NewRequestModal';
import Toast from '../utils/Toast';
import getRequerimientos from '../services/getRequerimientos';
import getTipoRequerimientos from '../services/getTipoRequerimientos';
import Filter from './Filter';
import getCategoriaRequerimientos from '../services/getCategoriaRequerimientos';
import Spinner from './Spinner';

function RequestTable() {

    const [ show, setShow ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [filter, setFilter] = useState({ tipoRequerimiento: [], categoriaRequerimiento: [], prioridad: [], estado: [] });
    const [solicitudes, setSolicitudes] = useState([]);
    const [filteredSolicitudes, setFilteredSolicitudes] = useState([]);
    const { authToken } = useContext(AuthContext);
    const [requerimientoTipos, setRequerimientoTipos] = useState([]);
    const [requerimientoCategorias, setRequerimientoCategorias] = useState([]);
    
    useEffect(() => {

        setLoading(true);
        
        getRequerimientos(authToken)
        .then((data) => {
            console.log(data);
            if (data.status !== 'Success') throw new Error(data.message);
            setSolicitudes(data.data);
            setFilteredSolicitudes(data.data);
        })
        .catch((e)=> Toast({ icon: 'error', title: 'Ups!', text: 'Ha ocurrido un error: ' + e.mssage }))
        .finally(()=> setLoading(false));

        getTipoRequerimientos(authToken)
        .then((data) => {
            const mappedArr = data.data.map(tipoRequerimiento => {
                return { value: tipoRequerimiento.codigo, text: tipoRequerimiento.descripcion, id: tipoRequerimiento.id };
            });
            setRequerimientoTipos([ ...mappedArr ]);
        })
        .catch((e)=> Toast({ icon: 'error', title: 'Ups!', text: 'Ha ocurrido un error: ' + e.mssage }))
        .finally(()=> setLoading(false));

    }, []);

    const handleNewRequest = () => setShow(true);

    const filterSolicitudes = (updatedFilter) => {
        
        const filterableKeys = ['tipoRequerimiento', 'categoriaRequerimiento', 'prioridad', 'estado'];
    
        const activeFilters = Object.entries(updatedFilter)
            .filter(([key, values]) => filterableKeys.includes(key) && values.length > 0);
    
        if (!activeFilters.length) return solicitudes;
    
        return solicitudes.filter(solicitud =>
            activeFilters.every(([key, values]) =>
                values.includes(solicitud[key])
            )
        );
    };

    const changeFilter = (e) => {

        const value = e.target.value;
        const name = e.target.name;
    
        let updatedFilter = { ...filter };
    
        if (value === "Todos") {
            updatedFilter[name] = [];
        } else {
            if (!filter[name].includes(value)) {
                updatedFilter[name] = [...filter[name], value];
            }
        }
    
        setFilter(updatedFilter);
        const updatedSolicitudes = filterSolicitudes(updatedFilter);
        setFilteredSolicitudes(updatedSolicitudes);
        
        if (name === 'tipoRequerimiento') {
            const id = requerimientoTipos.find(tipoRequerimiento => tipoRequerimiento.value === value).id;
            getCategoriaRequerimientos(authToken, id)
            .then(data => {
                const mappedArr = data.data.map(categoria => {
                    return { value: categoria.descripcion, text: categoria.descripcion, id: categoria.id };
                });
                setRequerimientoCategorias([ ...mappedArr ]);
            });
        }
    };

    const removeFilter = (tipo, filterName) => {
        const updatedFilter = {
            ...filter,
            [filterName]: filter[filterName].filter(item => item !== tipo)
        };
        setFilter(updatedFilter);
        const updatedSolicitudes = filterSolicitudes(updatedFilter);
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

    return (
        <div className="container d-flex mt-2  gap-2 flex-column justify-content-start align-items-center vh-100 vw-auto">
            <div className="container row">
                <div className="col-3  d-flex container justify-content-start align-items-end">
                    <button type="button" className="btn btn-outline-primary   justify-content-center align-items-center" onClick={handleNewRequest}>+ Nueva Solicitud</button>
                </div>
                <div className="container col-9 row gap-3  ">
                    <div className="col">
                        <Filter handleChange={changeFilter} name={'tipoRequerimiento'} label="Tipo" options={requerimientoTipos} />
                    </div>
                    <div className="col">
                        <Filter handleChange={changeFilter} name={'categoriaRequerimiento'} label="Categoria" options={requerimientoCategorias} />
                    </div>
                    <div className="col">
                        <Filter handleChange={changeFilter} name={'estado'} label="Estado" options={[
                            { value: 'Abierto', text: 'Abierto' },
                            { value: 'Cerrado', text: 'Cerrado' },
                            { value: 'Asignado', text: 'Asignado' }
                        ]} />
                    </div>
                    <div className="col">
                        <Filter handleChange={changeFilter} name={'prioridad'} label="Prioridad" options={[
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
                {showTags(filter.categoriaRequerimiento, "categoriaRequerimiento")}
                {showTags(filter.estado, "estado")}
                
            </div>
            <div className="container d-flex mt-10 flex-column align-items-center gap-5  vh-auto justify-content-between">
                { !loading && <Table solicitudes={filteredSolicitudes} /> }
                { loading && <Spinner size={60} /> }
            </div>
            { show && <NewRequestModal show={show} setShow={setShow} />}
        </div>   
    );
}

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
        margin: '5px'
    },
    removeTag: {
        marginLeft: '8px',
        cursor: 'pointer',
        color: '#FFFFFF'
    }
}

export default RequestTable;