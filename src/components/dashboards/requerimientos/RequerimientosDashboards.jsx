import React, { useContext, useEffect, useState } from "react";
import Dashboard from "../Dashboard";
import useConfig from "./useConfig";
import { AuthContext } from "../../../context/AuthContext";
import Spinner from "../../Spinner";
import getRequerimientos from "../../../services/getRequerimientos";
import ViewRequestModal from "../../ViewRequestModal";
import NewRequestModal from "../../NewRequestModal";
import Toast from "../../../utils/Toast";
import FiltersLayout from "../FiltersLayout";
import FilterTipoRequerimiento from "./FilterTipoRequerimiento";
import FilterCategoriaRequerimiento from "./FilterCategoriaRequerimiento";
import FilterEstado from "./FilterEstado";

function RequerimientosDashboards() {

  const { 
    columnsSchema, 
    pageSchema, 
    showViewRequerimientoModal,
    setShowViewRequerimientoModal,
    selectedRequerimientoId,
    data, 
    setData,
    updateUsuarioPropietario } = useConfig();

  const [ columnFilters, setColumnFilters ] = useState([ ]); 

  const onFilterChange = (id, value) => {
    setColumnFilters((prevFilters) => {

      const existingFilter = prevFilters.find(filter => filter.id === id);

      if (existingFilter) {
        return prevFilters.map(filter =>
            filter.id === id ? { ...filter, value } : filter
        );
      } else {
        return [...prevFilters, { id, value }];
      }
    });
  };

  const [ showNewRequerimientoModal, setShowNewRequerimientoModal ] = useState(false);

  const { authToken } = useContext(AuthContext);

  const [ loading, setLoading ] = useState(false);

  useEffect(() => {

    setLoading(true);

    getRequerimientos(authToken)
    .then((data) => setData(data.data))
    .catch((e)=> Toast({ icon: 'error', title: 'Ups!', text: 'Ha ocurrido un error: ' + e.mssage }))
    .finally(()=> setLoading(false));

  }, [showNewRequerimientoModal]);

  return (
    <div className="container mt-2">
      
      { data.length > 0 &&
        <>
          <Dashboard
            data={data}
            updateData={updateUsuarioPropietario}
            columnsSchema={columnsSchema}
            pageSchema={pageSchema}
            columnFilters={columnFilters}
            onFilterChange={onFilterChange}
          >
            <div className="mb-2">
              <button 
                type="button" 
                className="btn btn-outline-primary" 
                onClick={() => setShowNewRequerimientoModal(true)}
              >
                + Nueva Solicitud
              </button>
            </div>

            <FiltersLayout>
              
              <FilterTipoRequerimiento 
                handleChange={onFilterChange}
              />

              <FilterCategoriaRequerimiento 
                handleChange={onFilterChange}
              />

              <FilterEstado 
                handleChange={onFilterChange}
              />
              
            </FiltersLayout>

          </Dashboard> 

          { showNewRequerimientoModal && 
            <NewRequestModal
              show={showNewRequerimientoModal} 
              setShow={setShowNewRequerimientoModal} 
            />
          }

          { showViewRequerimientoModal && 
            <ViewRequestModal
              show={showViewRequerimientoModal} 
              setShow={setShowViewRequerimientoModal}
              requerimientoId={selectedRequerimientoId}
            />
          }
        </>
      }

      { (loading && data.length === 0) && <Spinner size={60} /> }

    </div>
  );
}

export default RequerimientosDashboards;