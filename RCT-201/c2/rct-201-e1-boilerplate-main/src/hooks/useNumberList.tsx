import { useEffect,useState } from "react";

const useNumberList = (initialArray: Array<number|string>) => {
  // TODO
  // refer readme.md for what to return
  const [list,setlist]=useState<Array<number|string>>(initialArray)

  const appendStart=(number:string)=>{
    setlist([+number,...list])
  }
  const appendEnd=(number:string)=>{
    setlist([...list,+number])
  }
  const popStart=(number:string)=>{
    let newList=list
    newList.shift()
    setlist([...newList])
  }
  const popEnd=(number:string)=>{
    let newList=list
    newList.pop()
    setlist([...newList])
  }
  const clear=()=>{
    setlist([])
  }
  const reset=()=>{
    setlist(initialArray)
  }
  return{
    list:list,
    appendStart:appendStart,
    appendEnd:appendEnd,
    popStart:popStart,
    popEnd:popEnd,
    clear:clear,
    reset:reset,

  }
};

export default useNumberList;
