//imports

import { useContext } from "react";
import { AppContext } from "./app-context";

//style
const style = {
    fontSize:"20px",
    paddingBottom:"20px"
}
//main
function Counter(){
    const [state] = useContext(AppContext);
        
    return(
        <div style={style}>
            <div>Quotes in view: {state.filteredamount}</div>
            <div>Total quote count: {state.quotecount}</div>
        </div>
    );
};
export default Counter;