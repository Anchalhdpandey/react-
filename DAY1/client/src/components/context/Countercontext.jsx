import { createContext } from "react";
import { useState } from "react";

export const MyCounterContext=createContext();
const  ProviderCounterContext = ({ children }) => {
  const [counter, setCounter] = useState(1);
  function Increment() {
    setCounter(counter + 1)
  }
  return(
    <MyCounterContext.Provider value={{counter,Increment}}>
        {children}
    </MyCounterContext.Provider>
  )
};
export default ProviderCounterContext