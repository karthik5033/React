import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter(counter + 1); // updates state
    console.log("New counter:", counter + 1);
  };

  const removeValue=()=>{
     setCounter(counter - 1); // updates state
     console.log("New counter:", counter - 1);
  }

  return (
    <>
      <h1>Learning React course {counter}</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;


//  const addValue = () => {
//    setCounter(counter + 1); //doesnt do any changes in the adding...only adds 1 not 4
//    setCounter(counter + 1); 
//    setCounter(counter + 1); 
//    setCounter(counter + 1); 
//    console.log("New counter:", counter + 1);
//  };
//   const addValue = () => {
//     setCounter(prev=prev+1); //This is dependent on previous one . Therefore adds 4 on single click
//     setCounter(prev=prev+1);
//     setCounter(prev=prev+1);
//     setCounter(prev=prev+1);
//     console.log("New counter:", counter + 1);
//   };