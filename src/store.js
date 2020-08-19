import { applyMiddleware, combineReducers, compose, createStore } from "redux";

import { cartReducer } from "./reducers/cartReducers";
import { productsReducer } from "./reducers/productReducers";
import thunk from "redux-thunk";

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    products: productsReducer,
    cart: cartReducer,
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
