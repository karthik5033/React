import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import { Children } from "react";

const reactElement={
  type:'a',
  props:{
    href:"https:google.com",
    target:'_blank'
  },
  Children:'Click me to visit google'
}

function MyApp(){
  return(
    <div>
      <h1>Custom React App</h1>
    </div>
  )
}
const AnotherElement=(
  <a href="https://google.com" target="_blank">Visit google</a>
)

const areactElement=React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'Click to visit google'
)

// ReactDOM.createRoot(document.getElementById("root")).render(AnotherElement );
// ReactDOM.createRoot(document.getElementById("root")).render(<MyApp/>);
// ReactDOM.createRoot(document.getElementById("root")).render(areactElement);
