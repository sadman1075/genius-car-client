import React, { useContext } from 'react';
import { Authcontex } from '../Context/Context';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const{user,loading}=useContext(Authcontex)
    const location=useLocation();
    if(loading)
    {
        return <span className="loading loading-spinner text-center text-error"></span>
    }
    if(user)
    {
        return children;
    }
   return <Navigate state={{from:location}} replace></Navigate>
};

export default PrivateRoutes;