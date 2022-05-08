import React from 'react';

import './Preview.scss';
import SvgIcon from "../../../SvgIcon/SvgIcon";
import { useSelector } from "react-redux";
import { getCurrentPrice, getPizzaProps } from "../../../../store/selectors";


const Preview = (props) => {
  const {
    onSubmit,
    closeModal,
  } = props;

  const pizzaSettings = useSelector(getPizzaProps);
  const price = useSelector(getCurrentPrice);


  return (
    <div className="modal__preview">
      <div className="modal__close" onClick={closeModal}>
        <SvgIcon
          icon="cross"
          size={[ 16, 16 ]}
        />
      </div>

      <h3 className="title">
        Ваша пицца
      </h3>

      <div className="modal__table">
        {
          Object.values(pizzaSettings).map(item => {
            return (item.props.length !== 0)
              ? (
                <div className="modal__prop-block" key={item.name}>
                  <h4 className="modal__subtitle">
                    {item.name}
                  </h4>

                  <ul className="modal__list">
                    {
                      item.props.map(item => {
                        return (
                          <li className="modal__list-item" key={item.name}>
                         <span>
                           {item.name}
                         </span>

                            {
                              item.price > 0 && <span>${item.price}</span>
                            }
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              )
              : null
          })
        }
      </div>

      <div className="modal__price-block">
        <h4 className="modal__subtitle">
          Цена заказа - ${price}
        </h4>
      </div>

      <button className="button" onClick={onSubmit}>
        Оплатить
      </button>
    </div>
  )
}

export default Preview;