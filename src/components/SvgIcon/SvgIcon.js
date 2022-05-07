import React from 'react';
import { SVG_ICONS } from "./icons";

const getSvgSize = (width, height) => ({ width, height });


const SvgIcon = (props) => {
  const {
    icon,
    size,
    className = '',
    color,
  } = props;

  const SvgComponent = SVG_ICONS[icon];

  const svgSize = Array.isArray(size)
    ? getSvgSize(size[0], size[1])
    : getSvgSize(size, size);

  return (
    <SvgComponent
      {...svgSize}
      color={color}
      className={className}
    />
  )
}

export default SvgIcon;