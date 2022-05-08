import React from 'react';

import { useController } from "react-hook-form";
import { useDispatch } from "react-redux";

import { CHANGE_REQUIRED_PROP } from "../../store/actions";


const RadioConfig = (props) => {
  const {
    radioGroupName,
    radioGroupValue,
    radioConfigArr,
    checkedItem,
    control,
    className,
    classNameLabel,
  } = props;

  const dispatch = useDispatch();

  const {
    field
  } = useController({
    control: control,
    name: radioGroupValue,
    defaultValue: radioConfigArr[0].value,
  });

  const onChangeCustom = (e, price, slug, name) => {
    field.onChange(e);
    dispatch(CHANGE_REQUIRED_PROP({
      groupName: radioGroupValue,
      price,
      slug,
      name,
    }));
  }

  return (
    <div className={className}>
      <h4 className="label-name">{radioGroupName}</h4>

      <div className={`${classNameLabel}__list`}>
        {radioConfigArr.map((item, i) => (
          <label
            className={`${classNameLabel}__label`}
            key={item.name}
            data-is-check={(!checkedItem) ? (i === 0) : (item.slug === checkedItem)}>
            <input
              type="radio"
              {...field}
              value={item.slug}
              hidden
              defaultChecked={i === 0}
              onChange={(e) => onChangeCustom(e, item.price, item.slug, item.name)}
            />

            {item.name}
          </label>
        ))}
      </div>
    </div>
  )
}

export default RadioConfig;