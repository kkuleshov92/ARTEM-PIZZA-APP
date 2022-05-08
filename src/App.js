import React from 'react';

import Config from "./containers/Config/Config";
import Header from "./containers/Header/Header";

import './styles/main.scss';
import { ModalProvider } from "./context/ModalContext";
import Modals from "./components/Modals/Modals";

function App() {
  return (
    <ModalProvider>
      <Modals/>
      <Header/>
      <Config/>
    </ModalProvider>
  );
}

export default App;
