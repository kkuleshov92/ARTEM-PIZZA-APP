import { defaultPizza } from "../config/constants";
import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';

const orderReducer = (state = defaultPizza, action) => {
  switch (action.type) {
    case 'required_prop':
      return {
        ...state,
        settings: {
          ...state.settings,
          [action.payload.groupName]: {
            ...state.settings[action.payload.groupName],
            props: [{
              price: action.payload.price,
              name: action.payload.name,
              slug: action.payload.slug,
            }]
          },
        }
      }
    case 'additional_prop':
      if (action.payload.add) {
        return {
          ...state,
          settings: {
            ...state.settings,
            [action.payload.groupName]: {
              ...state.settings[action.payload.groupName],
              props: [ ...state.settings[action.payload.groupName].props, {
                price: action.payload.price,
                name: action.payload.name,
                slug: action.payload.slug,
              }]
            },
          }
        }
      } else {
        return {
          ...state,
          settings: {
            ...state.settings,
            [action.payload.groupName]: {
              ...state.settings[action.payload.groupName],
              props: state.settings[action.payload.groupName].props?.filter(prop => {
                return prop.name !== action.payload.name
              })
            },
          }
        }
      }

    case 'calculation_price':
      const price = Object.values(state.settings).reduce((sum, current) => {
        if (current.props.length) {
          return sum + current.props.reduce((sum, current) => {
            return sum + current.price;
          }, 0);
        }

        return sum;
      }, state.defaultPrice)

      return {
        ...state,
        price
      }
    default:
      return state
  }
}

export const store = configureStore({
  reducer: {
    order: orderReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})