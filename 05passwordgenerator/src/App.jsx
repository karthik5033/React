import { useState,useCallback,useEffect,useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
 const generatePassword = useCallback(() => {
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if (numberAllowed) str += "0123456789";
  if (charAllowed) str += "!@#$%^&*";
  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
  }
  setPassword(pass);
 },[length,numberAllowed,charAllowed]);

 const copyPasswordToClipboard = () => {
  window.navigator.clipboard.writeText(password);
  passwordRef.current.select();
 };

 useEffect(() => {
  generatePassword();
 },[length,numberAllowed,charAllowed,generatePassword]);
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3 text-xl font-bold">
        Password Generator
      </h1>

      {/* Password display + copy button */}
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="w-full py-1 px-3 outline-none"
          placeholder="Password"
          readOnly
          ref={passwordRef}

        />
        <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-700 px-3 py-0.5 shrink-0 text-white hover:bg-blue-600 transition">
          Copy
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-y-3 text-sm">
        {/* Length slider */}
        <div className="flex items-center gap-x-2">
          <input
            id="length"
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label htmlFor="length">Length: {length}</label>
        </div>

        {/* Number toggle */}
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="numbers"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numbers">Include Numbers</label>
        </div>

        {/* Special character toggle */}
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="characters"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="characters">Include Special Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
