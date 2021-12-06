//imports

import { useContext } from "react";
import { AppContext } from "./app-context";

//style
const style ={
    position:"relative",
    textAlign: 'center',
    display: 'block', 
    width: '95%',
    margin: 'auto',
    borderRadius: '10px',
    backgroundColor: 'gray',
    padding: '5px',
    border: 'solid 1px black',
    boxShadow: '0 4px 4px 0 black',
    marginBottom: '5px'
}
const buttonstyle ={
    position:"absolute",
    float:"right",
    top:"0",  
    right:"0",
    marginTop:"-10px",
    marginRight:"-10px",
    borderRadius:"25px",
    color:"white", 
    backgroundColor:"darkRed", 
    cursor:"pointer", 
    fontSize:"large",
    boxShadow: '0 4px 4px 0 black',
    
}
//main
// {quote}
function Quote({quote}){
    const [state, setState] = useContext(AppContext)
    
    function deleteMe(q){
        // hooooly smokes i finally did it..
        let new_quotes = state.quotes.filter(({quote}) =>{
            return!(q === quote)
        });
        setState({...state, quotes:new_quotes})
    }
    return(
        <div style={style}>
            
            <div style={{width:"95%", fontSize:"30px", }}>
                {quote}
                <button style={buttonstyle} onClick={()=>{ deleteMe(quote) }}>X</button>
            </div>    
            

        </div>
    )
}
export default Quote;