/* eslint-disable no-lone-blocks */
import React, { useState } from "react";
import "./App.css";
import data from "./data.js";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display.js";
import SpecialButton from "./components/ButtonComponents/SpecialButtons/SpecialButton";
import OperatorButton from "./components/ButtonComponents/OperatorButtons/OperatorButton";
import NumberButton from "./components/ButtonComponents/NumberButtons/NumberButton";



function App() {
  // console.log(data);

  const [display, setDisplay] = useState(0);
  const specialClickHandler = buttonName => {
    console.log(buttonName);
    setDisplay(buttonName);
  };

  let count = 0;

  let buttonDisplayHell = (x, i) => {
    console.log(x);
    {

      if (i === 0 || i === 3 || i ===6 || i === 9) {
        return (
          <>
            <OperatorButton
              buttonName={data.operators[count++].char}
              clickHandler={specialClickHandler}
            />
            <NumberButton buttonName={x} clickHandler={specialClickHandler} />
          </>
        )
      } else if (i === data.numbers.length - 1){
        return (
          <>
            <NumberButton buttonName={x} clickHandler={specialClickHandler} />
            <OperatorButton
              buttonName={data.operators[count++].char}
              clickHandler={specialClickHandler}
            />
           
          </>
        )
      } else {
        return <NumberButton buttonName={x} clickHandler={specialClickHandler} />;
      }
    }
  }

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display display={display} />

        <section class="buttonContainer">
          {data.specials.map(x => {
            return (
              <SpecialButton
                buttonName={x}
                clickHandler={specialClickHandler}
              />
            );
          })}
          {
            data.numbers.map((x, i) => {
              return buttonDisplayHell(x, i)
          })
          }
         

          {/* {data.operators.map(x => {
            return (
              <OperatorButton
                buttonName={x.char}
                clickHandler={specialClickHandler}
              />
            );
          })}

          {data.numbers.map((x, i) => {
            if (true) {
              return (
                <NumberButton
                  buttonName={x}
                  clickHandler={specialClickHandler}
                />
              );
            } else {
              return (
                <NumberButton
                  buttonName={x}
                  clickHandler={specialClickHandler}
                />
              );
            }
          })} */}
        </section>
      </div>
    </div>
  );
}

export default App;
