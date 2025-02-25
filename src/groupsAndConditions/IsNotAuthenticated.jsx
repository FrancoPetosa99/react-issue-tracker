import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const IsNotAuthenticated = ({ children }) => {

  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return children;
  } 

};

export default IsNotAuthenticated;