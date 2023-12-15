import { useFirebaseAuth } from '../hooks/useFirebaseAuth';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component }:any) => {
  const { loggedIn, isAuthLoading } = useFirebaseAuth();

  if(isAuthLoading) return "Loading ...."

  return (
    <>
      {
        loggedIn ? <Component/> : <Navigate to={"/"}/>
      }
    </>
  );
};
export default ProtectedRoute;