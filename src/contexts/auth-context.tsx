import {createContext, ReactNode, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

interface AuthContextProps {
  user: string
  setUser: (user: string) => void
  saveInformationToLocalStorage: (name: string) => void
  handleUserLogout: () => void
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({children}: {children: ReactNode}) {
  const [user, setUser] = useState("")
  
  const navigate =useNavigate()
  
  function saveInformationToLocalStorage(name: string) {
    localStorage.setItem("user", JSON.stringify(name))
    
    setUser(name)
    
    navigate("/home")
  }
  
  function handleUserLogout() {
    localStorage.removeItem("user")
    setUser("")
  }
  
  useEffect(() => {
    const informationStoredUser = localStorage.getItem("user");
    
    if (informationStoredUser && !user) {
      setUser(JSON.parse(informationStoredUser));
      navigate("/home", { replace: true });
    }
  }, [user, navigate]);
  
  return (
    <AuthContext.Provider value={{
      user,
      setUser,
      saveInformationToLocalStorage,
      handleUserLogout
    }}>
      {children}
    </AuthContext.Provider>
  )
}