import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  function changeColor(color){
    setColor(color)
  }

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className="fixed bottom-12 inset-x-0 flex justify-center px-2">
        <div className="flex gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={() => changeColor("bg-blue-500")}
          >
            Blue
          </button>


          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={() => setBg("bg-blue-500")}
          >
            Blue
          </button>


          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={() => setBg("bg-blue-500")}
          >
            Blue
          </button>



          {/* <button onClick={() => setBg("bg-red-500")}>Red</button>
          <button onClick={() => setBg("bg-black")}>Reset</button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
