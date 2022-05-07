import React from 'react';
import { IMAGE_LIST } from "./Loadable";


const Image = (props) => {
  const {
    name,
    className = '',
  } = props;

  return (
    <img src={IMAGE_LIST[name]} className={className} alt=""/>
  )
}

export default Image;