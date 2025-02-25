import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";

function FilterInput({ name, placeholder, callback }) {

    const [ input, setInput ] = useState('');

    const onFilterChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setInput(value);

        callback(name, value);
    };

    return (
        <div style={styles.container} className='mb-3'>
            <FaSearch style={styles.icon} />
            <input 
                type={'search'} 
                name={name ? name : '' } 
                value={input}
                onChange={onFilterChange}
                placeholder={placeholder}
                style={styles.input}
            />
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth: "250px",
        border: "1px solid black",
        borderRadius: "6px",
        padding: "5px 10px"
    },
    input: {
        flex: 1,
        border: "none",
        outline: "none",
        fontSize: "14px",
        padding: "5px",
    },
    icon: {
        fontSize: "14px",
    }
};

export default FilterInput;