import React, { useContext, useEffect, useState } from "react";
import Dashboard from "../Dashboard";
import useConfig from "./useConfig";
import getExternalUsers from "../../../services/getExternalUsers";
import { AuthContext } from "../../../context/AuthContext";
import Spinner from "../../Spinner";
import { useNavigate } from "react-router-dom";
import UserModal from "../../modales/usuarios/UserModal";
import FiltersLayout from "../FiltersLayout";
import FilterInput from "../FilterInput";
import Toast from "../../../utils/Toast";

function UsersDashboards() {

  const { 
    columnsSchema, 
    pageSchema, 
    filters,
    showModal,
    setShowModal,
    selectedUser } = useConfig();

  const [ columnFilters, setColumnFilters ] = useState(
    filters.map(filter => { 
      return { id: filter.name, value: '' }
  })); 
  
  const onFilterChange = (id, value)=> {
    const filter = columnFilters.find(filter => filter.id === id);
    filter.value = value;
    setColumnFilters([ ...columnFilters ]);
  };
    
  const navigate = useNavigate();

  const { authToken } = useContext(AuthContext);

  const [ loading, setLoading ] = useState(false);
  const [ users, setUsers ] = useState([ ]);

  useEffect(() => {

    setLoading(true);

    getExternalUsers(authToken)
    .then((data) => setUsers(data.data))
    .catch((e)=> Toast({ icon: 'error', title: 'Ups!', text: 'Ha ocurrido un error: ' + e.mssage }))
    .finally(()=> setLoading(false));

  }, []);

  const goToRegisterForm = () => navigate('/register');

  return (
    <div className="container mt-2">
      
      { !loading &&
          
        <Dashboard
          data={users}
          columnsSchema={columnsSchema}
          pageSchema={pageSchema}
          filters={filters}
          columnFilters={columnFilters}
          onFilterChange={onFilterChange}
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

          <FiltersLayout>
            { filters.map(filter => 
              <FilterInput
                type={'text'}
                name={filter.name}
                placeholder={filter.label}
                key={filter.name}
                callback={onFilterChange}
              />
            )}
          </FiltersLayout>

        </Dashboard> 
      }

      { loading && <Spinner size={60} /> }

      { showModal && <UserModal setShow={setShowModal} user={selectedUser} /> }

    </div>
  );
}

export default UsersDashboards;