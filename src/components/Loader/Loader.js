import React from 'react';

import './Loader.scss';


const Loader = (props) => {
  const {
    size = 55,
  } = props;
  const height = size + 'px';
  const width = size * 0.75 + 'px';

  return (
    <div className="loader" style={{ height, width }}>
      <div className="loader__line" />
      <div className="loader__line" />
      <div className="loader__line" />
    </div>
  )
}

export default Loader;