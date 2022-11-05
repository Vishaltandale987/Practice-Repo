import React from "react";
import { createContext, useReducer} from "react";
import reducer from "./reducer"

// 1. create cart context and cart context provider for the entire application to have cart related data;

// 2. maintain cart data in the state; it goes without saying; you are expected to use useReducer as state management tool; ( Hint : different actions you are expected to have are adding item to cart, removing item from cart, and checkout ..)

// 3. send both state and dispatch values so that entire application has access to the state and dispatch function;

export const CardContext = createContext();

const initState = [];

const CartContextProvider = ( {children} ) => {
  
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <CardContext.Provider value={{state, dispatch}}>
      {children}
    </CardContext.Provider>
  )
};

export default CartContextProvider;
