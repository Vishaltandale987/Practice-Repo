import React, { useState } from "react";
import useNumberList from "../hooks/useNumberList";

type List2Props = {
  // TODO
  label: string; 
  initialValues: number[]; 

};
const List2 = (props: List2Props) => {


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
    <div data-testid="list2">
      <h3 data-testid="list2-label">{/* Label */}
      {label}
      </h3>

      {/* Iterate List and wrap the element div below inside */}
      <div >{/* Each element in a list */}
       {
        list?.map((el,i)=>(
          <div data-testid="list2-element" key={i}>{el}</div>
        ))
       }
      
      
      
      </div>

      <input data-testid="list2-input"
      type="number"
      value={number} 
      onChange={(e)=>setNumber(e.target.value)} 
      />
      <button data-testid="list2-btn-append-end"
       onClick={()=>{
        appendEnd(number)
        setNumber("")
      }} 
      >
        Append End
        {/* Button to append new number to the end of the list */}
      </button>
      <button data-testid="list2-btn-pop-start"
       onClick={()=>{
        popStart(number)
        setNumber("")
      }} 
      >
        Pop Start
        {/* Button to  pop first element of the list */}
      </button>
      <button   onClick={clear} data-testid="list2-btn-clear">
        {/* Button to  clear the list */}
        Clear
      </button>
      <button onClick={reset} data-testid="list2-btn-reset">
        {/* Button to  reset the list to initialValue */}
        Reset
      </button>
    </div>
  );
};

export default List2;
