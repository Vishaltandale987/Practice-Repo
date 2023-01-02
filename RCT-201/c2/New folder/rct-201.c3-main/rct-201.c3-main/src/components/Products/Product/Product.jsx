import React,{useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_ADD_ITEM_TO_CART, ACTION_GET_CART, ACTION_REMOVE_ITEM_CART } from "../../../redux/cart/cart.actions";
import { ACTION_GET_PRODUCTS } from "../../../redux/product/product.actions";

const Product = ({data}) => {

 
  // ACTION_ADD_ITEM_TO_CART

 const { data: cartData } = useSelector((store)=> store.cart)
 const dispatch = useDispatch()

 // data.id !== productIds

 const [checkCart, setcheckCart] = useState(false)
 const [request , setrequest] = useState(false)


useEffect(()=>{

  console.log(cartData)

  cartData.find((el)=>{
   
    
    if(data.id==el.productId) setcheckCart(true)
    
  })
 
},[request])


const addDatatoCart = ()=>{


  const Product = {
  productId : data.id , 
  count: 1,
  }
  
  dispatch(ACTION_ADD_ITEM_TO_CART(Product))
  dispatch(ACTION_GET_CART())
  dispatch( ACTION_GET_PRODUCTS())
  setrequest(!request)
}



  return (
    <div data-cy={`product-${data.id}`}>
      <h3 data-cy="product-name">{data.name}</h3>
      <h6 data-cy="product-description">{data.description}</h6>
       
      <div>
    
      {
        checkCart ?  <div>
        <button data-cy="product-increment-cart-item-count-button">+</button>
      <span data-cy="product-count">0</span>
      <button data-cy="product-decrement-cart-item-count-button">-</button>
      <button data-cy="product-remove-cart-item-button" 
      onClick={()=>dispatch(ACTION_REMOVE_ITEM_CART(data.id)) } >Remove</button>
      </div> :   <button data-cy="product-add-item-to-cart-button" onClick={addDatatoCart} >ADD</button>
      }
       
      </div>
    </div>
  );
};

export default Product;
