import React, { useEffect } from 'react';

import { useForm } from "react-hook-form";
import RadioConfig from "../../components/RadioConfig/RadioConfig";

import { useDispatch, useSelector } from "react-redux";
import CheckboxConfig from "../../components/CheckboxConfig/CheckboxConfig";

import './Config.scss';
import { getCurrentPrice, getPizzaProps } from "../../store/selectors";
import { cheesesArr, doughArr, meatArr, sauceArr, sizeArr, vegetablesArr } from "./ConfigData";
import { CALC_PIZZA_PRICE } from "../../store/actions";


const Config = () => {
  const {handleSubmit, watch, control} = useForm({mode: "onChange"});

  const chosenParams = watch();

  const onSubmit = (data) => {
    console.log(data);
  }

  const pizzaSettings = useSelector(getPizzaProps);
  const price = useSelector(getCurrentPrice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CALC_PIZZA_PRICE())
  }, [pizzaSettings])

  return (
    <section className="config">
      <div className="config__tools">
        <h2 className="title">
          Собери свою пиццу
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="config__required-props">
            <RadioConfig
              radioGroupName="Размер"
              radioGroupValue="size"
              radioConfigArr={sizeArr}
              control={control}
              checkedItem={chosenParams["size"]}
              className="config-main-prop"
            />

            <RadioConfig
              radioGroupName="Тесто"
              radioGroupValue="dough"
              radioConfigArr={doughArr}
              control={control}
              checkedItem={chosenParams["dough"]}
              className="config-main-prop"
            />
          </div>

          <div className="config__sauce-block">
            <RadioConfig
              radioGroupName="Выберите соус"
              radioGroupValue="sauce"
              radioConfigArr={sauceArr}
              control={control}
              checkedItem={chosenParams["sauce"]}
              className="config-sauce-prop"
            />
          </div>

          <div className="config__cheeses-block">
            <CheckboxConfig
              checkboxGroupName="Добавьте сыр"
              checkboxGroupValue="cheese"
              checkboxConfigArr={cheesesArr}
              control={control}
              className="config-additional-prop"
            />
          </div>

          <div className="config__meat-block">
            <CheckboxConfig
              checkboxGroupName="Добавьте мясо"
              checkboxGroupValue="meat"
              checkboxConfigArr={meatArr}
              control={control}
              className="config-additional-prop"
            />
          </div>

          <div className="config__vegetables-block">
            <CheckboxConfig
              checkboxGroupName="Добавьте овощи"
              checkboxGroupValue="vegetables"
              checkboxConfigArr={vegetablesArr}
              control={control}
              className="config-additional-prop"
            />
          </div>

          <button className="button">
            Заказать за ${price}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Config;