import React, {useState} from "react";
import "./App.css";
import data from './data.js'
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Display from './components/DisplayComponents/Display.js'
import SpecialButton from './components/ButtonComponents/SpecialButtons/SpecialButton'

function App() {
  console.log(data);

  const [display, setDisplay] = useState(0);
  return (
    <div className="container">
      <Logo />
      <div className="App">
        
        <Display display={display}/>

        {
          data.specials.map(x => {
            return (
             <SpecialButton buttonName={x}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
