//imports
import { useContext } from "react";
import { AppContext } from "./app-context";

//style
const style = {
marginTop : "20px",
fontSize: "25px",
}
//main
function Filter(){

    const [state, setState] = useContext(AppContext)

    return(

        <div style={{marginBottom:"20px"}}>

            <div style={style}> Word count filter: <div style={{fontSize:"25px"}}>{state.wordfilter}</div> </div>
            <input style={{width:"200px", cursor:"grab"}} id="slider" type="range" min="1" max="50" value={state.wordfilter} onChange={(e) => setState({...state,wordfilter:(e.target.value)})} ></input>
            
        </div>

    );
};

export default Filter;