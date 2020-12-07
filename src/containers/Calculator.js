import React, { useState, useEffect } from "react";
import * as math from 'mathjs' // import all as math from mathjs

import '../App.css';

function Calculator() {
  const [prevValue, setPrevValue] = useState(null);
  const [input, setInput] = useState("0");
  const [nextNumber, setNextNumber] = useState("");
  const [operator, setOperator] = useState(null);

  useEffect(() => {}, [operator, input, prevValue]);

  const handleNum = (event) => {
    const number = parseInt(event.target.value, 10)
    setInput(input === "0" ? String(number) : input + number);
    setNextNumber(nextNumber === "0" ? String(number) : nextNumber + number);
  };


  const insertDot = () => {
    if (!/\./.test(nextNumber)) {
      setInput(input + ".")
      setNextNumber(nextNumber + ".")
    }
  };

  const handleOperation = (event)  => {
    setPrevValue(input);
    setNextNumber("");
    setOperator(operator+event.target.value);
    setInput(input+event.target.value);
  }

  const clearData = () => {
    setInput("0");
    setNextNumber("")
    setPrevValue(null);
    setOperator(null)
  };

  const handleEqual = () => {
    setOperator(null);
    setPrevValue(null);
    setNextNumber("");

    setInput(String(handleMath(input)));
  }
    const handleMath = (input) => {
      //Split into numbers and formula operators
      const operators = input.split(/([-+/*]+)/g);
      let formula = [];

      operators.forEach(operator => {
        if (/([-+/*]+)/.test(operator)) {
          //operator is sequence (?) of math operators
            if(operator.slice(-1) === "-") {
              operator = operator.slice(-2)
            }else {
              operator = operator.slice(-1)
            }
            
            formula.push(operator)

          }else {
            //operator is number"
            formula.push(operator)
          }
        });

      return math.evaluate(formula.join(""));
    }


  return (
    <div className="calculator">
     <div className="wrapper">
      <input type="text" id="display" value={input} readOnly />
      <div className="calculator-buttons">
        <button id="clear" className="calc-button op-key is-clear" onClick={()=>clearData()}>Clear</button>
        <button id="divide"className="calc-button op-key" value="/" onClick={(e)=>handleOperation(e)}>/</button>

        <button id="seven" className="calc-button numbers" value="7" onClick={(e)=>handleNum(e)}>7</button>
        <button id="eight" className="calc-button numbers" value="8" onClick={(e)=>handleNum(e)}>8</button>
        <button id="nine" className="calc-button numbers" value="9" onClick={(e)=>handleNum(e)}>9</button>
        <button id="multiply" className="calc-button op-key" value="*" onClick={(e)=>handleOperation(e)}>x</button>

        <button id="four" className="calc-button numbers" value="4" onClick={(e)=>handleNum(e)}>4</button>
        <button id="five" className="calc-button numbers" value="5" onClick={(e)=>handleNum(e)}>5</button>
        <button id="six" className="calc-button numbers" value="6" onClick={(e)=>handleNum(e)}>6</button>
        <button id="subtract" className="calc-button op-key" value="-" onClick={(e)=>handleOperation(e)}>-</button>

        <button id="one" className="calc-button numbers" value="1" onClick={(e)=>handleNum(e)}>1</button>
        <button id="two" className="calc-button numbers" value="2" onClick={(e)=>handleNum(e)}>2</button>
        <button id="three" className="calc-button numbers" value="3" onClick={(e)=>handleNum(e)}>3</button>
        <button id="add" className="calc-button op-key" value="+" onClick={(e)=>handleOperation(e)}>+</button>

        <button id="zero" className="calc-button numbers is-zero" value="0" onClick={(e)=>handleNum(e)}>0</button>
        <button id="decimal" className="calc-button numbers" value="." onClick={()=>insertDot()}>.</button>
        <button id="equals" className="calc-button eq" value="=" onClick={()=>handleEqual()}>=</button>
      </div>
      </div>
    </div>
  );
}

export default Calculator;