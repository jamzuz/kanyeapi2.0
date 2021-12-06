//imports
import { createContext, useEffect, useState  } from "react";

const AppContext = createContext([{}, () => {}]);

const AppProvider = ({ children }) => {
    //defaults
    let quotes = [];
    let quotecount = quotes.length;
    let wordfilter = 1;
    let filteredlist = [];
    let filteredamount = filteredlist.length;
    
    const [state, setState] = useState({
        //these seem like setters
        quotes: quotes,
        quotecount: quotecount, 
        wordfilter: wordfilter,
        filteredlist: filteredlist,
        filteredamount: filteredamount,       
    });   
    useEffect(() =>{
        let new_list = [];
        //min filter value = 1, if <1 make into 1(its nan for 1 render..)
        if (state.wordfilter < 1) {
            setState({...state, wordfilter: 1});
        }
        // go through all the quotes, split them and count words        
        state.quotes.forEach( quote =>{           
            let temp = quote.quote.split(' ');
            if (temp.length >= state.wordfilter) {
                new_list.push(quote);                
            }            
        });
        // counter functionality
        // probably unnecessary assignments but im sure its fine
        let counts = state.quotes.length;
        let counts1 = new_list.length;
        setState({...state, quotecount: counts, filteredamount: counts1, filteredlist:new_list});
        // its so hard to live with the error this gives..
    },[state.quotes, state.wordfilter])

    return(
        <AppContext.Provider value={[state, setState]}>
            {children}
        </AppContext.Provider>
    );
};

export {AppContext, AppProvider};