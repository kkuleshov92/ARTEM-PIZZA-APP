import { createStore } from "redux";
import { defaultPizza } from "../config/constants";

const orderReducer = (state = defaultPizza, action) => {
  switch (action.type) {
    case 'required_prop':
      return {
        ...state,
        [action.payload.propName]: action.payload.value,
      }
    default:
      return state
  }
}

export const store = createStore(orderReducer)

store.subscribe(() => {
  console.log(store.getState())
})