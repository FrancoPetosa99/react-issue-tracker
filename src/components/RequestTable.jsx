import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/offcanvas';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, {useState, useEffect, useRef} from 'react';
import NewRequest from './NewRequestModal';
import Table from './Table';
import { Modal } from 'bootstrap'; 
import SelectBox from './SelectBox';



function RequestTable({ children }) {
    let filterObj = {
        tipo: [],
        categoria:  [],
        estado: []
    }


    const solicitudes_json = [
        {
          num: 1,
          date: "2023-10-01",
          cod: "SOL-001",
          priority: "Urgente",
          tipo: "Incidente",
          categoria: "Hardware",
          subject: "PC no enciende",
          estado: "Abierto",
          author: "Juan Pérez"
        },
        {
          num: 2,
          date: "2023-10-02", 
          cod: "SOL-002",
          priority: "Urgente",
          tipo: "Petición",
          categoria: "Software",
          subject: "Instalar Office",
          estado: "En Proceso",
          author: "María García"
        },
        {
          num: 3,
          date: "2023-10-03",
          cod: "SOL-003", 
          priority: "Baja",
          tipo: "Consulta",
          categoria: "Red",
          subject: "WiFi lento",
          estado: "Cerrado",
          author: "Pedro López"
        },
        {
          num: 4,
          date: "2023-10-04",
          cod: "SOL-004",
          priority: "Alta",
          tipo: "Incidente", 
          categoria: "Seguridad",
          subject: "Virus detectado",
          state: "Abierto",
          author: "Ana Martínez"
        },
        {
          num: 5,
          date: "2023-10-05",
          cod: "SOL-005",
          priority: "Media",
          tipo: "Petición",
          categoria: "Hardware",
          subject: "Nuevo monitor",
          estado: "Pendiente", 
          author: "Luis Rodríguez"
        }
    ];


    const [requestNew, setRequestNew] = useState(false);
    const [filter, setFilter] = useState(filterObj);
    const [solicitudes, setSolicitudes] = useState(solicitudes_json);
    const [filteredSolicitudes, setFilteredSolicitudes] = useState(solicitudes_json);
    
    // Better approach:
    let modal = useRef(null);

    useEffect(() => {
        if(requestNew) {
            modal = new Modal(document.getElementById('newRequestModal'));
            modal.show();
            
            // Add event listener for modal close
            const modalElement = document.getElementById('newRequestModal');
            modalElement.addEventListener('hidden.bs.modal', () => {
                setRequestNew(false);
            });
        }
    }, [requestNew]);

    useEffect(() => {
        console.log(filter, filteredSolicitudes)
    }, [filteredSolicitudes]);

    useEffect(() => {
        const updatedSolicitudes = filterSolicitudes();
        setFilteredSolicitudes(updatedSolicitudes);
    }, [filter]);

    const handleNewRequest = () => {
        setRequestNew(true);
    };

    const getTypes = () => {
        return ["Consulta", "Incidente", "Petición" ]
    }

    const getCategories = () => {
        return ["Hardware", "Software", "Red"]
    }

    const getEstados= () => {
        return ["Abierto", "Cerrado"]
    }

   
    const filterSolicitudes = () => {
        const activeFilters = Object.entries(filter)
            .filter(([_, values]) => values.length > 0);
        
        if (!activeFilters.length) return solicitudes;
        
        return solicitudes.filter(solicitud => 
            activeFilters.every(([key, values]) => 
                values.includes(solicitud[key])
            )
        );
    };

    const ChangeFilter = (value, label, action="add") => {
        let updatedFilter = null;
        if(action=="remove"){
            updatedFilter = {
                ...filter,
                [label.toLowerCase()]: filter[label.toLowerCase()].filter(item => item !== value)
            };
        }else{
           
            if(value === "Todos") {
                updatedFilter = {
                    ...filter,
                    [label.toLowerCase()]: [] // Create a new array by combining existing and new values
                };
            }else{
                if(filter[label.toLowerCase()].includes(value)){
                    updatedFilter = filter;
                }else{
                    updatedFilter = {
                        ...filter,
                        [label.toLowerCase()]: [...filter[label.toLowerCase()], value] // Create a new array by combining existing and new values
                    };
                }
                
            }
        }
        
        setFilter(updatedFilter);
        
    };

    const showTags = (list, label)=>{
        return (list.map((tipo)=>{
            if (tipo !== "Todos") {
                return( <div key={tipo} style={styles.tag}>
                    {tipo}  
                    <span 
                        style={styles.removeTag}
                        onClick={() => ChangeFilter(tipo,  label, "remove")}
                    >
                        ×
                    </span>
                </div>
            )}
        }))
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
            {requestNew && <NewRequest/>}
            
                <div class="container row">
                    <div class="col-3  d-flex container justify-content-start align-items-end">
                        <button type="button" className="btn btn-outline-primary   justify-content-center align-items-center" onClick={handleNewRequest}>+ Nueva Solicitud</button>
                    </div>
                    <div class="container col-9 row gap-3  ">
                        <div class="col">
                            <SelectBox  onChangeFunction={ChangeFilter} label="Tipo" options={getTypes()} ></SelectBox>
                        </div>
                        <div class="col">
                            <SelectBox onChangeFunction={ChangeFilter} label="Categoria" options={getCategories()}></SelectBox>
                        </div>
                        <div class="col">
                            <SelectBox onChangeFunction={ChangeFilter} label="Estado" options={getEstados()} ></SelectBox>
                        </div>
                    </div>
                </div>
                <div className='container d-flex flex-row justify-content-end' style={styles.tagContainer}>
                    {showTags(filter.categoria, "categoria")}
                    {showTags(filter.tipo, "tipo")}
                    {showTags(filter.estado, "estado")}
                    
                </div>
                <div class="container d-flex mt-10 flex-column align-items-center gap-5  vh-auto justify-content-between">
                            <Table solicitudes={filteredSolicitudes}></Table>
            </div>
            
           
        </div>   
    );
}

export default RequestTable;