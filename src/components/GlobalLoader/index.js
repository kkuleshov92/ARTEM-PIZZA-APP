import React from 'react';

import './GlobalLoader.scss';

const GlobalLoader = () => {
  return (
    <div className="loader">
      <div className="lds-ripple">
        <div/>
        <div/>
      </div>
    </div>
  );
};

export default GlobalLoader;