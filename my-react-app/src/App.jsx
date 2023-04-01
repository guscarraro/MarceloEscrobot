import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.js";
import { DivInicial } from "./App.js";

function App() {
  const [count, setCount] = useState(0);

  return (
    <DivInicial>
      <div>
        <p className="animate">Welcome to Escrobot country</p>
      </div>
    </DivInicial>
  );
}

export default App;
