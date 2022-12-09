import React, { useState } from "react";

function App() {

  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [isValid, setIsValid] = useState(true);

  const handleOperation = (e) => {
    const clickedButton = e.target.name;

    if (isValid) {
      switch (clickedButton) {
        case "Add":
            setResult(num1 + num2);
          break;
        case "Substract":
          setResult(num1 - num2);
          break;
        case "Multiply":
          setResult(num1 * num2);
          break;
        case "Divide":
          if (num2 === 0) {
            setIsValid(false)
          } else {
            setResult(num1 / num2);
            setIsValid(true)
          }
          break;
  
        default:
          break;
      }
    }
    
  }

  const handleNum1 = (e) => {
    const input1 = +e.target.value;

    if (isNaN(input1)) {
      setIsValid(false)
    } else {
      setNum1(input1)
      setIsValid(true)
    }
    
  }

  const handleNum2 = (e) => {
    const input2 = +e.target.value;
    
    if (isNaN(input2)) {
      setIsValid(false)
    } else {
      setNum2(input2)
      setIsValid(true)
    }
    
  }


  return (
    <div className="calculator">
      <div className="input">
        <input onChange={handleNum1} type="text" name="num1" placeholder="número 1" />
        <input onChange={handleNum2} type="text" name="num2" placeholder="número 2" />
      </div>
      <div className="buttons">
      <button onClick={handleOperation} name="Add">+</button>
        <button onClick={handleOperation} name="Substract">-</button>
        <button onClick={handleOperation} name="Multiply">*</button>
        <button onClick={handleOperation} name="Divide">/</button>
      </div>
        
        
        <p>Resultado: <span className="result">{result}</span></p>
        {!isValid && <p>Introduzca un dato válido por favor.</p>}
    </div>
  )
}

export default App;
