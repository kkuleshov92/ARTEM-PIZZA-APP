import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);


export const AuthProvider = ({children}) => {
  const [ user, setUser ] = useState(null);

  const handleAddUser = (newUser) => {
    setUser(newUser);
  }

  return (
    <AuthContext.Provider
      value={{user, handleAddUser}}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)