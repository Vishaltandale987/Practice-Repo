import React from "react";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_GET_PRODUCTS } from "../../redux/product/product.actions";
import Product from "./Product/Product";

const Products = () => {


  const dispatch = useDispatch()
  const { data } = useSelector((store)=> store.product)

  const [request , setrequest] = useState(false)
  

  useEffect(()=>{
      dispatch( ACTION_GET_PRODUCTS())
  },[request])

  return <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)"}} >

  { 
  data?.map((el,i)=>(
    <Product key={i} data={el} setrequest={setrequest}
    request={request} />
  ))}

</div>;
};

export default Products;