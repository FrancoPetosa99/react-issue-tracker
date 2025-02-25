import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../../context/AuthContext';
import getInternalUsers from '../../../../services/getInternalUsers';
import Toast from '../../../../utils/Toast';
import asignarPropietario from '../../../../services/asignarPropietario';
import AsyncSelect from 'react-select/async';
import { PiUserCirclePlus } from "react-icons/pi";
import Spinner from '../../../Spinner';

function AsignarPropietarioSelect({ requerimientoId, callback }) {

    const { authToken } = useContext(AuthContext);

    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const loadOptions = (searchValue, callback) => {
        getInternalUsers(authToken)
            .then(users => {
                const mappedArr = users.map(user => ({
                    value: user.id,
                    label: user.nombreUsuario,
                    id: user.id,
                    nombreUsuario: user.nombreUsuario
                }));

                if (searchValue) {
                    const filteredArr = mappedArr.filter(user => user.label.includes(searchValue));
                    return callback(filteredArr);
                }

                callback(mappedArr);
            })
            .catch((e) => Toast({ icon: 'error', title: 'Ups!', text: 'Ha ocurrido un error: ' + e.message }));
    };

    const handleChange = (selectedUser) => {

        setLoading(true);

        if (!selectedUser) return;

        const usuarioPropietarioId = selectedUser.id;
        const nombreUsuario = selectedUser.nombreUsuario;

        asignarPropietario(authToken, requerimientoId, usuarioPropietarioId)
        .then(() => Toast({ title: 'Usuario Asignado', text: `${nombreUsuario} es el nuevo propietario` }))
        .then(() => callback(nombreUsuario))
        .catch((e) => Toast({ icon: 'error', title: 'Ups!', text: 'Ha ocurrido un error: ' + e.message }))
        .finally(() => setLoading(false));

        setMenuIsOpen(false);
    };

    return (
        <AsyncSelect
            className="basic-single"
            classNamePrefix="select"
            name="asignarPropietarioSelect"
            id="asignarPropietarioSelect"
            placeholder="Seleccionar..."
            required={false}
            isDisabled={false}
            isSearchable={true}
            isClearable={false}
            onChange={handleChange}
            loadOptions={loadOptions}
            defaultOptions
            isMulti={false}
            components={{ DropdownIndicator: (props) => <CustomDropdownIndicator {...props} setMenuIsOpen={setMenuIsOpen} loading={loading}/> }}
            menuIsOpen={menuIsOpen}
            styles={{
                control: (styles) => ({
                    ...styles,
                    width: '120px',
                    fontSize: '12px',
                    padding: '2px'
                }),
                input: (styles) => ({
                    ...styles,
                    fontSize: '12px' 
                }),
                valueContainer: (styles) => ({
                    ...styles,
                    padding: '0'
                }),
                dropdownIndicator: (styles) => ({
                    ...styles,
                    padding: '2px'
                }),
                menu: (provided) => ({
                    ...provided,
                    position: "absolute",
                    top: "100%",
                    zIndex: 999
                })
            }}
        />
    );
};

const CustomDropdownIndicator = ({ menuIsOpen, setMenuIsOpen, loading }) => {
    return (
        <>
            {
                loading
                ? <Spinner size={14} />
                :
                    <div 
                        style={{ padding: "5px", cursor: "pointer" }} 
                        onClick={() => setMenuIsOpen((prev) => !prev)}
                    >
                        <PiUserCirclePlus size={20} color={menuIsOpen ? "#007bff" : "#6c757d"} />
                    </div>
            }
        </>
    );
};

export default AsignarPropietarioSelect;