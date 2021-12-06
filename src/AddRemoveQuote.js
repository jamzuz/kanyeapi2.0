//imports
import { useContext } from "react";
import { AppContext } from "./app-context";
//style
const style ={
    borderRadius:"15px", 
    color:"white", 
    backgroundColor:"darkGreen", 
    cursor:"pointer",
    width:"140px",
    height:"55px",
    fontSize:"20px",
    paddingRight:"5px"
}
const style1 ={
    color:"white", 
    cursor:"pointer",
    width:"140px",
    height:"55px",
    fontSize:"20px",
    borderRadius:"15px", 
    backgroundColor:"darkRed", 
    marginLeft:"10px"
}

//main
function AddRemoveQuote(){
    const [state, setState] = useContext(AppContext)


    async function addQuote(){
        console.log("fetching a quote..");
        const API_URL = "https://api.kanye.rest/";

        let response = await fetch(API_URL);

        let data = await response.json();      

        let new_quotes = [...state.quotes, data];
        setState({...state, quotes: new_quotes})
    };
 
    function removeQuotes(){
        console.log("removing quotes...")
        setState({...state, quotes:[]})
        console.log("removed quotes!")       
    }

// 

    return(
        <div  style={{marginBottom:"20px"}}>
            <button onClick={addQuote} style={style}>Add 1 quote</button>

            <button onClick={removeQuotes}style={style1}>del quotes</button>
        </div>
    );
};

export default AddRemoveQuote;