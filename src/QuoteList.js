//imports
import Quote from "./Quote";
import { useContext } from "react";
import { AppContext } from "./app-context";
//style
//main
function QuoteList(){
    const [state] = useContext(AppContext)
//if filtered quotes has lenght.
if (state.filteredlist.length > 0) {
    return(
        <div>
            {
             //lazy way of assigning keys, cant think of how this could backfire
             // well if you have 2 same quotes it deletes them both...
                state.filteredlist.map(({quote}, index) =>{
                    return(
                        <Quote quote={quote} key={index}/>
                    )
                })
            }
        </div>        
    );
}
//if quotes have stuff but filter doesnt
if (state.quotes.length > 1 && state.filteredlist.length <1) {
    return(
        <div style={{color: "darkRed",fontSize:"50px"}}>No quotes to show!</div>
    )
}
//else
    return(
        <div style={{color: "darkRed",fontSize:"50px"}}>No quotes fetched!</div>
    )
}
export default QuoteList;