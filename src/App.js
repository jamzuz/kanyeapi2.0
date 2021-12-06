//imports

import AddRemoveQuote from './AddRemoveQuote';
import Filter from './Filter';
import QuoteList from './QuoteList';
import Counter from './Counter';
import Header from './Header';


//main

function App(){

const style={
  width: '80%',
  margin: 'auto',
  textAlign: 'center',
  border: 'solid 1px ',
  boxShadow: '0 4px 4px 0 black',
  borderRadius: '25px',
  paddingBottom: '20px'
  
}


  return (
    <div id="main" style={style}>

      <Header/>

      <div id="content">

        <Filter />
        <Counter />
        <AddRemoveQuote/>

          <div style={{fontSize:"40px"}}>
              Quotes:
              <div>              
              <QuoteList/>                  
              </div>
          </div>

        {/* <Counter /> */}
      

      </div>
    </div>



  );
}

export default App;
