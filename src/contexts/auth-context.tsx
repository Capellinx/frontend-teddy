import { createContext, ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextProps {
  user: string;
  setUser: (user: string) => void;
  saveInformationToLocalStorage: (name: string) => void;
  handleUserLogout: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string>("");
  const navigate = useNavigate();
  
  function saveInformationToLocalStorage(name: string) {
    localStorage.setItem("user", JSON.stringify(name));
    setUser(name);
    
    navigate("/home");
  }
  
  function handleUserLogout() {
    localStorage.removeItem("user");
    setUser("");
    
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
        user,
        setUser,
        saveInformationToLocalStorage,
        handleUserLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
