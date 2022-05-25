import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Components/Loading';
import auth from '../../fierbase.init';
import UseAdmin from '../../Hooks/UseAdmin';


const RequireAdmin = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin,adminLoading] = UseAdmin(user)
    let location = useLocation();

    if(loading || adminLoading){
        return <Loading></Loading>
    }

  if (!user || !admin) {
    signOut(auth);
    return <Navigate to="/signIn" state={{ from: location }} replace />;
  }

  return children;
};


export default RequireAdmin;