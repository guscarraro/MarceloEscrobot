import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.js";
import { DivInicial, StyledSection2 } from "./App.js";

function App() {
  const [count, setCount] = useState(0);

  // const mario = document.querySelector(".mario");

  // const pulo = () => {
  //   mario.classList.add("jump");
  //   setTimeout(()=>{
  //     mario.classList.remove('jump')
  //   },500)
  // };
  // document.addEventListener("keydown", jump);
  return (
    <div>
      <DivInicial>
        <div>
          <p className="animate">Welcome to Escrobot country</p>
        </div>
      </DivInicial>
      <StyledSection2>
        <div className="game-board">
          <img src="../../src/assets/mario-gif.gif" className="mario jump" />
          <img src="../../src/assets/tubo2.webp" className="pipe" />
        </div>
      </StyledSection2>
    </div>
  );
}

export default App;
