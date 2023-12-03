// import axios from "axios";s
import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = ({isAuth}) =>{

    return(
        isAuth? <Outlet /> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes