import React from 'react';

import { useForm } from "react-hook-form";
import RadioConfig from "../../components/RadioConfig/RadioConfig";

import './Config.scss';


const Config = () => {
  const {handleSubmit, watch, control} = useForm({mode: "onChange"});

  const chosenParams = watch();

  const onSubmit = (data) => {
    console.log(data);
  }

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
              rules={{ required: true }}
              checkedItem={chosenParams["size"]}
              className="config__required-prop"
            />

            <RadioConfig
              radioGroupName="Тесто"
              radioGroupValue="dough"
              radioConfigArr={doughArr}
              control={control}
              rules={{ required: true }}
              checkedItem={chosenParams["dough"]}
              className="config__required-prop"
            />
          </div>


          <button>
            Checkout
          </button>
        </form>
      </div>
    </section>
  )
}

export default Config;