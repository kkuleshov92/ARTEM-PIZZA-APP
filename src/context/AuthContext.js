import { createContext, useContext, useState } from 'react';


const AuthContext = createContext(null);


export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const signIn = (newUser, callback) => {
    setUser(newUser);
    callback();
  }
  const signOut = (callback) => {
    setUser(null);
    callback();
  }

  return (
    <AuthContext.Provider
      value={{user, signOut, signIn}}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)