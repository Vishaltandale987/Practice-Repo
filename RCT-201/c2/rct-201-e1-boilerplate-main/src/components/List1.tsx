
import React, { useEffect, useState } from "react";
import useNumberList from "../hooks/useNumberList";


type List1Props = {
  // TODO
   label: string; 
   initialValues: number[] ; 
};
const List1 = (props: List1Props) => {

  const { initialValues, label } = props

  const [initialArray, setIntialArray ] = useState<Array <number >>([...initialValues])

  const [number , setNumber] = useState<string>("")


const {  list,
  appendStart,
  appendEnd,
  popStart,
  popEnd,
  clear,
  reset} = useNumberList(initialArray)





  return (
    <div data-testid="list1">
      <h3 data-testid="list1-label">{/* Label */}
      {label}
      </h3>
      {/* Iterate List and wrap the element div below inside */}
      <div >{/* Each element in a list */}
       {
        list?.map((el,i)=>(
          <div data-testid="list1-element" key={i}>{el}</div>
        ))
       }
      
      
      
      </div>
      

      
      <input type="number" data-testid="list1-input" value={number} 
      onChange={(e)=>setNumber(e.target.value)}  />
      <button data-testid="list1-btn-append-start"  
      onClick={()=>{
        appendStart(number)
        setNumber("")
      }} >
        {/* Append to start of list btn */}
        Append Start
      </button>
      <button data-testid="list1-btn-pop-end"
       onClick={()=>{
        popEnd(number)
        setNumber("")
      }} 
      >
        Pop End
        {/* po last element btn */}
      </button>
      <button
      onClick={clear}
       data-testid="list1-btn-clear">
        Clear

        {/* clear list and set empty button */}
      </button>
      <button data-testid="list1-btn-reset"
      onClick={reset}
      >
        {/* Reset list to default value btn */}
        Reset
      </button>
    </div>
  );
};

export default List1;

