import React from 'react';

import './RadioConfig.scss';
import { useController } from "react-hook-form";

const RadioConfig = (props) => {
  const {
    radioGroupName,
    radioGroupValue,
    radioConfigArr,
    checkedItem,
    control,
    className,
  } = props;

  const {
    field
  } = useController({
    control: control,
    name: radioGroupValue,
    defaultValue: radioConfigArr[0].value,
  });

  return (
    <div className={`radio-controls ${className}`}>
      <h4 className="radio-controls__name">{radioGroupName}</h4>

      <div className="radio-controls__list">
        {radioConfigArr.map((item, i) => (
          <label
            className="radio-controls__label"
            key={item.name}
            data-is-check={(!checkedItem) ? (i === 0) : (item.value === checkedItem)}>
            <input
              type="radio"
              {...field}
              value={item.value}
              hidden
              defaultChecked={i === 0}
            />

            {item.name}
          </label>
        ))}
      </div>
    </div>
  )
}

export default RadioConfig;