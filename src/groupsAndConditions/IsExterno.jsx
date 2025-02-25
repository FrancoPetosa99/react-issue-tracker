import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const IsExterno = ({ children }) => {

  const { currentUser } = useContext(AuthContext);

  if (currentUser && currentUser.role === 'externo') {
    return children;
  } 

};

export default IsExterno;