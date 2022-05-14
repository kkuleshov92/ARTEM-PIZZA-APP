import { useLocation, Navigate } from 'react-router-dom';
import { ROUTES } from "../config/constants";
import { useAuthContext } from "../context/AuthContext";

const RequireAuth = ({children}) => {
  const location = useLocation();
  const {user} = useAuthContext();
  console.log('here')
  if (!user) {
    return <Navigate to={ROUTES.login} state={{from: location}}/>
  }

  return children
}

export default RequireAuth;