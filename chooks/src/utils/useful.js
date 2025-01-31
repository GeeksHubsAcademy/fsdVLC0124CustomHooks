
import React, {useState} from 'react';

export const useCounter = (initialValue = 10) => {
    const [counter, setCounter] = useState(initialValue);
  
    const increase = () => setCounter(counter + 1);
    const decrease = () => setCounter(counter -1);
    const reset = () => setCounter(0);
  
    return {
      counter,
      increase,
      decrease,
      reset
    };
  };