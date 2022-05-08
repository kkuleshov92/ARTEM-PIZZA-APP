import React, { useState } from 'react';
import { useController } from "react-hook-form";
import { useDispatch } from "react-redux";
import { CHANGE_ADDITIONAL_PROP } from "../../store/actions";
import Image from "../Image/Image";
import SvgIcon from "../SvgIcon/SvgIcon";

const CheckboxConfig = (props) => {
  const {
    checkboxGroupName,
    checkboxGroupValue,
    checkboxConfigArr,
    control,
    className,
    classNameLabel,
  } = props;

  const [value, setValue] = useState([])

  const dispatch = useDispatch();

  const {
    field
  } = useController({
    control: control,
    name: checkboxGroupValue,
  });

  const onChangeCustom = (e, price, slug, name) => {
    let valueCopy;

    if (e.target.checked) {
      valueCopy = [...value, e.target.value]
    } else {
      valueCopy = [...value].filter(item => {
        return item !== e.target.value
      })
    }

    const add = e.target.checked;

    dispatch(CHANGE_ADDITIONAL_PROP({
      groupName: checkboxGroupValue,
      price,
      slug,
      name,
      add,
    }))

    field.onChange(valueCopy);

    setValue(valueCopy);
  }

  return (
    <div className={className}>
      <h4 className="label-name">{checkboxGroupName}</h4>

      <div className={`${classNameLabel}__list`}>
        {
          checkboxConfigArr.map((item, index) => (
            <label key={item.name} data-is-checked={value.includes(item.slug)} className={`${classNameLabel}__label`}>
              <div className={`${classNameLabel}__img-wrapper`}>
                <Image name={item.img} className={`${classNameLabel}__img`}/>
              </div>

              <input
                type="checkbox"
                hidden
                {...field}
                onChange={(e) => onChangeCustom(e, item.price, item.slug, item.name )}
                checked={value.includes(item.slug)}
                value={item.slug}/>

              <div className={`${classNameLabel}__name`}>{item.name}</div>

              <div className={`${classNameLabel}__price-wrap`}>
                <div>
                  ${item.price}
                </div>

                <div data-is-checked={value.includes(item.slug)} className={`${classNameLabel}__check-icon`}>
                  <SvgIcon
                    icon="check"
                    color="#fff"
                    size={[16, 16]}
                  />
                </div>
              </div>
            </label>
          ))
        }
      </div>
    </div>
  )
}

export default CheckboxConfig;