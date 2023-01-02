import {useState} from 'react';


const useClock = () => {
  // TODO
  // refer readme.md for what to return
  const time=new Date()
  const hrs=time.getHours()
  const min=time.getMinutes()
  const sec=time.getSeconds()

  return{
    hours:hrs,
    minutes:min,
    seconds:sec
  }
};

export default useClock;
