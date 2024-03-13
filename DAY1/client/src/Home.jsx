import { useContext } from "react";
import { MyCounterContext } from "./components/context/Countercontext";

function Home(){
    const {counter, Increment}=useContext(MyCounterContext);
    return(
        <div>
            <h2>Counter:{counter}</h2>
            <button onClick={Increment}>+</button>
        </div>
    )
}
export default Home;