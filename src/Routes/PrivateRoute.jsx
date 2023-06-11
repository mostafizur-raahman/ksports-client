import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
  
    if ( user ) return children;

    
};

export default PrivateRoute;