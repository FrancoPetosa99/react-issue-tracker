import React, { useContext, useEffect, useState } from "react";
import Dashboard from "../Dashboard";
import useConfig from "./useConfig";
import getExternalUsers from "../../../services/getExternalUsers";
import { AuthContext } from "../../../context/AuthContext";
import Spinner from "../../Spinner";
import { useNavigate } from "react-router-dom";
import UserModal from "../../modales/UserModal";

function UsersDashboards() {

  const navigate = useNavigate();

  const { authToken } = useContext(AuthContext);

  const { 
    columnsSchema, 
    pageSchema, 
    filters,
    showModal,
    setShowModal,
    selectedUser } = useConfig();

  const [ loading, setLoading ] = useState(false);
  const [ users, setUsers ] = useState([ ]);

  useEffect(() => {

    setLoading(true);

    getExternalUsers(authToken)
    .then((data) => setUsers(data.data))
    .catch((e)=> Toast({ icon: 'error', title: 'Ups!', text: 'Ha ocurrido un error: ' + e.mssage }))
    .finally(()=> setLoading(false));

  }, []);

  const goToRegisterForm = () => {
    navigate('/register');
  };

  return (
    <div className="container mt-2">
      
      { !loading &&
          
        <Dashboard
          data={users}
          columnsSchema={columnsSchema}
          pageSchema={pageSchema}
          filters={filters}
        >
          <div className="mb-2">
            <button 
              type="button" 
              className="btn btn-outline-primary" 
              onClick={goToRegisterForm}
            >
              + Nuevo Usuario
            </button>
          </div>

        </Dashboard> 
      }

      { loading && <Spinner size={60} /> }

      { showModal && <UserModal setShow={setShowModal} user={selectedUser} /> }

    </div>
  );
}

export default UsersDashboards;