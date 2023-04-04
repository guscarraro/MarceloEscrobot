import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.js";
import { DivInicial, StyledSection2 } from "./App.js";

function App() {
  const [count, setCount] = useState(0);

  const mario = document.querySelector(".mario");
  const pipe = document.querySelector(".pipe");

  // const pulo = () => {
  //   mario.classList.add("jump");
  //   setTimeout(() => {
  //     mario.classList.remove("jump");
  //   }, 500);
  // };
  // const loop = setInterval(() => {
  //   const pipePosition = pipe.offsetLeft;
  //   const marioPosition = +window
  //     .getComputedStyle(mario)
  //     .bottom.replace("px", "");
  //   if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
  //     pipe.style.animation = "none";
  //     pipe.style.left = `${pipePosition}px`;
  //   }
  // }, 10);

  // document.addEventListener("keydown", pulo);
  return (
    <div>
      <DivInicial>
        <header>
          <h5>LOGO</h5>
          <nav>
            <p>Projetos</p>
            <p>Bio</p>
          </nav>
        </header>
        <div>
          <p className="animate">Welcome to Escrobot country</p>
        </div>
        <StyledSection2>
          <div className="game-board">
            <img src="../../src/assets/mario-gif.gif" className="mario jump" />
            <img src="../../src/assets/tubo2.webp" className="pipe" />
          </div>
        </StyledSection2>
      </DivInicial>
    </div>
  );
}

export default App;
