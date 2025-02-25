import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const IsAuthenticated = ({ children }) => {

  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    return children;
  } 

};

export default IsAuthenticated;