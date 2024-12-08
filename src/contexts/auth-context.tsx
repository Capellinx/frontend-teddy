import { createContext, ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Manager} from '../@types/manager';

interface AuthContextProps {
  user: Manager.Login;
  setUser: (user: Manager.Login) => void;
  saveInformationToLocalStorage: (payload: Manager.Login) => void;
  handleUserLogout: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Manager.Login>({
    name: "",
    token: "",
    expiresIn: 0
  });
  
  const navigate = useNavigate();
  
  function saveInformationToLocalStorage(payload: Manager.Login) {
    localStorage.setItem("user", JSON.stringify(payload));
    setUser(payload);
    
    navigate("/home");
  }
  
  function handleUserLogout() {
    localStorage.removeItem("user");
    setUser({
      name: "",
      token: "",
      expiresIn: 0
    });
    
    navigate("/");
  }
  
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      
      if (window.location.pathname === "/home") {
        navigate("/home", { replace: true });
      }
    }
  }, [navigate]);
  
  return (
    <AuthContext.Provider
      value={{
        handleUserLogout,
        saveInformationToLocalStorage,
        setUser,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
