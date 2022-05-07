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
    <div>
      <h4 className="label-name">{checkboxGroupName}</h4>

      <div className={`${className}__list`}>
        {
          checkboxConfigArr.map((item, index) => (
            <label key={item.name} data-is-checked={value.includes(item.slug)} className={`${className}__label`}>
              <Image name={item.img} className={`${className}__img`}></Image>

              <input
                type="checkbox"
                hidden
                {...field}
                onChange={(e) => onChangeCustom(e, item.price, item.slug, item.name )}
                checked={value.includes(item.slug)}
                value={item.slug}/>

              <div className={`${className}__name`}>{item.name}</div>

              <div className={`${className}__price-wrap`}>
                <div>
                  ${item.price}
                </div>

                <div data-is-checked={value.includes(item.slug)} className={`${className}__check-icon`}>
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