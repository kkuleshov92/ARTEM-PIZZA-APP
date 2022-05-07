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
          [action.payload.groupName]: [{
            price: action.payload.price,
            name: action.payload.name,
            slug: action.payload.slug,
          }],
        }
      }
    case 'additional_prop':
      if (action.payload.add) {
        return {
          ...state,
          settings: {
            ...state.settings,
            [action.payload.groupName]: [ ...state.settings[action.payload.groupName], {
              price: action.payload.price,
              name: action.payload.name,
              slug: action.payload.slug,
            }],
          }
        }
      } else {
        return {
          ...state,
          settings: {
            ...state.settings,
            [action.payload.groupName]: state.settings[action.payload.groupName]?.filter(prop => {
              return prop.name !== action.payload.name
            }),
          }
        }
      }

    case 'calculation_price':
      const price = Object.values(state.settings).reduce((sum, current) => {
        if (current.length) {
          return sum + current.reduce((sum, current) => {
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
  reducer: orderReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

store.subscribe(() => {

})