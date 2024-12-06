import { Navigate, Outlet } from 'react-router-dom';

export function AuthControllerAccess() {
  const isLocalStorageExist = JSON.parse(localStorage.getItem("user") as string);
  
  if(!isLocalStorageExist) {
    return <Navigate to="/" />;
  }
  
  return <Outlet />;
}