import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const IsInterno = ({ children }) => {

  const { currentUser } = useContext(AuthContext);

  if (currentUser && currentUser.role === 'interno') {
    return children;
  } 

};

export default IsInterno;