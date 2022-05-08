import React, { useCallback, useEffect } from 'react';

import { useForm } from "react-hook-form";
import RadioConfig from "../../components/RadioConfig/RadioConfig";

import { useDispatch, useSelector } from "react-redux";
import CheckboxConfig from "../../components/CheckboxConfig/CheckboxConfig";

import './Config.scss';
import { getCurrentPrice, getPizzaProps } from "../../store/selectors";
import { cheesesArr, doughArr, meatArr, sauceArr, sizeArr, vegetablesArr } from "./ConfigData";
import { CALC_PIZZA_PRICE } from "../../store/actions";
import { useModalContext } from "../../context/ModalContext";


const Config = () => {
  const {handleSubmit, watch, control} = useForm({mode: "onChange"});

  const {
    openModal,
  } = useModalContext()

  const chosenParams = watch();

  const onSubmit = useCallback((data) => {
    openModal({
      type: 'preview',
    })
  }, [])

  const pizzaSettings = useSelector(getPizzaProps);
  const price = useSelector(getCurrentPrice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CALC_PIZZA_PRICE())
  }, [ pizzaSettings ])

  return (
    <section className="config">
      <div className="container">
        <div className="config__tools">
          <h2 className="title">
            Собери свою пиццу
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="config__form">
            <div className="config__props-constructor">
              <RadioConfig
                radioGroupName="Размер"
                radioGroupValue="size"
                radioConfigArr={sizeArr}
                control={control}
                checkedItem={chosenParams["size"]}
                className="config-main-prop config__prop-block"
                classNameLabel="config-main-prop"
              />

              <RadioConfig
                radioGroupName="Тесто"
                radioGroupValue="dough"
                radioConfigArr={doughArr}
                control={control}
                checkedItem={chosenParams["dough"]}
                className="config-main-prop config__prop-block"
                classNameLabel="config-main-prop"
              />

              <RadioConfig
                radioGroupName="Выберите соус"
                radioGroupValue="sauce"
                radioConfigArr={sauceArr}
                control={control}
                checkedItem={chosenParams["sauce"]}
                className="config-sauce-prop config__prop-block"
                classNameLabel="config-sauce-prop"
              />

              <CheckboxConfig
                checkboxGroupName="Добавьте сыр"
                checkboxGroupValue="cheese"
                checkboxConfigArr={cheesesArr}
                control={control}
                classNameLabel="config-additional-prop"
                className="config-additional-prop config__prop-block"
              />

              <CheckboxConfig
                checkboxGroupName="Добавьте мясо"
                checkboxGroupValue="meat"
                checkboxConfigArr={meatArr}
                control={control}
                classNameLabel="config-additional-prop"
                className="config-additional-prop config__prop-block"
              />

              <CheckboxConfig
                checkboxGroupName="Добавьте овощи"
                checkboxGroupValue="vegetables"
                checkboxConfigArr={vegetablesArr}
                control={control}
                classNameLabel="config-additional-prop"
                className="config-additional-prop config__prop-block"
              />
            </div>

            <button className="button">
              Заказать за ${price}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Config;