import React from 'react';

import { ModalProvider } from "./context/ModalContext";
import { AuthProvider } from "./context/AuthContext";

import Modals from "./components/Modals/Modals";
import AppRouter from "./AppRouter";
import './styles/main.scss';


function App() {
  return (
    <ModalProvider>
      <AuthProvider>
        <Modals/>

        <AppRouter/>
      </AuthProvider>
    </ModalProvider>
  );
}

export default App;
