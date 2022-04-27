import React, { useState } from 'react';
import { useController } from "react-hook-form";

const CheckboxConfig = (props) => {
  const {
    checkboxGroupName,
    checkboxGroupValue,
    checkboxConfigArr,
    control,
    className,
  } = props;

  const [value, setValue] = useState([])

  const {
    field
  } = useController({
    control: control,
    name: checkboxGroupValue,
  });

  const onChangeCustom = (e) => {
    let valueCopy;

    if (e.target.checked) {
      valueCopy = [...value, e.target.value]
    } else {
      valueCopy = [...value].filter(item => {
        return item !== e.target.value
      })
    }

    field.onChange(valueCopy);

    setValue(valueCopy);
  }

  return (
    <div>
      <h4 className="label-name">{checkboxGroupName}</h4>

      <div className={`${className}__list`}>
        {
          checkboxConfigArr.map((item, index) => (
            <label key={item.name} data-is-checked={value.includes(item.value)}>
              <input
                type="checkbox"
                // hidden
                {...field}
                onChange={onChangeCustom}
                checked={value.includes(item.value)}
                value={item.value}/>

              {item.name}
            </label>
          ))
        }
      </div>
    </div>
  )
}

export default CheckboxConfig;