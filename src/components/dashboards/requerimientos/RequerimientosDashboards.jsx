import React, { useContext, useEffect, useState } from "react";
import Dashboard from "../Dashboard";
import useConfig from "./useConfig";
import { AuthContext } from "../../../context/AuthContext";
import Spinner from "../../Spinner";
import getRequerimientos from "../../../services/getRequerimientos";
import ViewRequestModal from "../../ViewRequestModal";
import NewRequestModal from "../../NewRequestModal";
import Toast from "../../../utils/Toast";

function RequerimientosDashboards() {

  const [ showNewRequerimientoModal, setShowNewRequerimientoModal ] = useState(false);

  const { authToken } = useContext(AuthContext);

  const { 
    columnsSchema, 
    pageSchema, 
    filters,
    showViewRequerimientoModal,
    setShowViewRequerimientoModal,
    selectedRequerimientoId } = useConfig();

  const [ loading, setLoading ] = useState(false);
  const [ requerimientos, setRequerimientos ] = useState([ ]);

  useEffect(() => {

    setLoading(true);

    getRequerimientos(authToken)
    .then((data) => setRequerimientos(data.data))
    .catch((e)=> Toast({ icon: 'error', title: 'Ups!', text: 'Ha ocurrido un error: ' + e.mssage }))
    .finally(()=> setLoading(false));

  }, []);

  return (
    <div className="container mt-2">
      
      { !loading &&
        <>
          <Dashboard
            data={requerimientos}
            columnsSchema={columnsSchema}
            pageSchema={pageSchema}
            filters={filters}
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

      { loading && <Spinner size={60} /> }

    </div>
  );
}

export default RequerimientosDashboards;