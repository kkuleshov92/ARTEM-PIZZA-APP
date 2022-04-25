import React from 'react';

import Config from "./containers/Config/Config";
import Header from "./containers/Header/Header";

import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Config />
    </div>
  );
}

export default App;
