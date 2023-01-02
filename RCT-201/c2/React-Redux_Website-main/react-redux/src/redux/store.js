// TODO: use this store variable to create a store.
import {applyMiddleware,combineReducers,compose,legacy_createStore} from 'redux'

import thunk from 'redux-thunk';
import { authReducer } from "./auth/auth.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { productReducer } from "./product/product.reducer";



const rootReducer=combineReducers({

  auth:authReducer,
  product:productReducer,
  cart:cartReducer
})


const createComposer=window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose
// Note: you can delete the line below, but remember to create a new store variable
export const store = legacy_createStore(rootReducer,createComposer(applyMiddleware(thunk)))

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
