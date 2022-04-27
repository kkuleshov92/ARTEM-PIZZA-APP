import React from 'react';

import { useForm } from "react-hook-form";
import RadioConfig from "../../components/RadioConfig/RadioConfig";

import { useSelector } from "react-redux";
import { getPrice } from "../../store/selectors";
import CheckboxConfig from "../../components/CheckboxConfig/CheckboxConfig";

import './Config.scss';


const Config = () => {
  const {handleSubmit, watch, control} = useForm({mode: "onChange"});

  const chosenParams = watch();

  const onSubmit = (data) => {
    console.log(data);
  }

  const price = useSelector(getPrice);

  const sizeArr = [
    {
      name: '30 см',
      value: '30',
    },
    {
      name: '35 см',
      value: '35',
    },
  ]

  const doughArr = [
    {
      name: 'Тонкое',
      value: 'thin',
    },
    {
      name: 'Пышное',
      value: 'lush',
    },
  ]

  const sauceArr = [
    {
      name: 'Томатный',
      value: 'tomato',
    },
    {
      name: 'Майонез',
      value: 'mayonnaise',
    },
    {
      name: 'Острый',
      value: 'spicy',
    },
    {
      name: 'Грибной',
      value: 'mushroom',
    },
    {
      name: 'Чесночный',
      value: 'garlic',
    },
    {
      name: 'Кисло-сладкий',
      value: 'sweet_sour',
    },
    {
      name: 'Горчичый',
      value: 'mustard',
    },
  ]

  const cheesesArr = [
    {
      name: 'Моцарелла',
      value: 'mozzarella',
    },
    {
      name: 'Чеддер',
      value: 'cheddar',
    },
    {
      name: 'Дор Блю',
      value: 'dor_blue',
    },
  ]

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
              checkboxGriupName="Добавьте сыр"
              checkboxGroupValue="cheese"
              checkboxConfigArr={cheesesArr}
              control={control}
              className="config-cheese-prop"
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