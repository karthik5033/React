import { useState } from "react";
import "./App.css"
function App() {
  // store the color key, not the class itself
  const [color, setColor] = useState("green");

  // map keys to Tailwind classes
  const colors = {
    blue: "bg-blue-500",
    red: "bg-red-500",
    yellow: "bg-yellow-400",
    green: "bg-green-500",
  };

  return (
    <div className={`w-full h-screen duration-200 ${colors[color]}`}>
      <div className="fixed bottom-12 inset-x-0 flex justify-center px-2">
        <div className="flex gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {Object.keys(colors).map((key) => (
            <button
              key={key}
              className={`outline-none px-4 py-1 rounded-full text-white shadow-lg ${
                key === "yellow" ? "text-black" : ""
              } ${colors[key]} hover:brightness-90 transition`}
              onClick={() => setColor(key)}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
