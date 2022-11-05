import React from "react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import {CardContext} from "../Context/CartContext/CartContextProvider"
import {addToCart} from "../Context/CartContext/action"
// import { addToCart } from "../Context/CartContext/action";
// import { CardContext } from "../Context/CartContext/CartContextProvider"

// 0. axios should be used for making network requests;

// 1. API request should be made to `https://fakestoreapi.com/products` on mount and get the data and the same data should be displayed in the form of cards ( 3 per row in large screens, 2 per row  in medium screens and 1 per row  in small screen  )

// 2. loading, error and data state should be maintained; show proper loading indicator and error state when required;

// 3. each product card should atleast contain product image, title , price and a add to cart button;

// 4. cart data is maintained in the cart context and based on the cart data if the product is already added to the cart, then the add to cart button should be disabled for that particular product;

// 5. clicking on add to cart button will add the product to the cart; this cart is maintained in the cart context; as useReducer has been used for state management in cart context; you need to dispatch some add_to_cart action to add new product to the cart.


const getData = () => {
  return axios.get(`https://fakestoreapi.com/products`);
};

// const itemAlreadyExists = (id, cartItems) => {
//   if(cartItems.find((item) => item.id === id)){
//     return true;
//   }
//   return false;
// }


const Home = () => {
  const [loading, setloading ] = useState(false);
  const [data, setdata ] = useState([]);
  const [error, seterror] = useState(false);
  const { state, dispatch} = useContext((CardContext));
  // console.log(data)

  useEffect(() => {
    setloading(true);
    getData().then((res) => {
      setdata(res.data);
      seterror(false)
    })
    .catch(() => {
      seterror(true);
      setdata([]);
    })
    .finally(() => {
      setloading(false);
    })
  }, []);


  if(loading) {
    return <h1>...Loading</h1>
  }

  if(error){

    return <h1>...Error</h1>

  }
  
  return( 
    <div>
      <h1> Home</h1> 

      {
       data.map((p) => (

        <div key={p.id}>

          <img src={p.image} alt="prod - img" style={{"width": "100px"}}/>,
  
          <p>{p.title}</p>
  
          <p>INR: {p.price}</p>

         <button
        // disabled = { itemAlreadyExists(p.id, state)}

        onClick={() => dispatch(addToCart(p))}

        >Add TO Cart</button>

          
        </div>
       

      

      ))
    }
    </div>
    )
};

export default Home;
