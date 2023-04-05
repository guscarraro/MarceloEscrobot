import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.js";
import { DivInicial, StyledSection2, DivApresentacao } from "./App.js";

function App() {
  const [modal, setModal] = useState(false);

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
          <div>
            <h5>LOGO</h5>
          </div>
          <nav>
            <p>Projetos</p>
            <p>Bio</p>
          </nav>
        </header>
        <DivApresentacao>
          <p className="animate grande">
            Olá,
            <br />
            Sou Marcelo, <br />
            criador de jogos
          </p>
          <p className="animate pequena">
            {" "}
            BIO <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, incidunt eum? Adipisci, suscipit sapiente incidunt et
            natus beatae quod illum iusto <br /> tempora tenetur eligendi, autem
            reprehenderit eos at, repudiandae ut.
          </p>
          {/* <img src="../../src/assets/robo2.gif" alt="" /> */}
        </DivApresentacao>
        {/* <div className="game-board">
            <img src="../../src/assets/mario-gif.gif" className="mario jump" />
            <img src="../../src/assets/tubo2.webp" className="pipe" />
          </div> */}
        <StyledSection2>
          <div className="divProjetos">
            <h4 className="name1">Projetos</h4>
            <p className="name2">Projetos</p>
            <div className="divUlcards">
              <ul>
                <li>
                  <img src="../../src/assets/canUGet AwayP1.png" alt="" />
                  <div>
                    <p>
                      <strong>Can you get away</strong>
                    </p>
                    <p>
                      Can you get away e um jogo multiplayer local onde o seu
                      objetivo e derrotar o outro jogador. Um dos meus primeiros
                      projetos 3d na Unity. A cada partida o cenario e os spawns
                      de item mudam de local para manter as partidas sempre
                      dinamicas.
                    </p>
                  </div>
                </li>
                <li>
                  <img src="../../src/assets/CWBattle1.png" alt="" />
                  <div>
                    <p>
                      <strong>CWBATTLE</strong>
                    </p>
                    <p>
                      Meu primeiro projeto baseado em unity. Trabalhei como game
                      designer e artista para o Curitibinha. O jogo tinha como
                      premissa valorizar a cultura Curitibana entao decidimos
                      criar um jogo de luta ao estilo smash bros em 2d. Onde vc
                      deve derrubar o inimigo do mapa.
                    </p>
                  </div>
                </li>
                <li>
                  <img src="../../src/assets/Thibrucella2.png" alt="" />
                  <div>
                    <p>
                      <strong>Thibrucela's Great Adventure</strong>
                    </p>
                    <p>
                      E O jogo e focado em utilizar a cooperacao entre dois
                      personagens com habilidades diferentes. Thibrucela
                      consegue carregar caixas enquanto o Gatinho consegue usar
                      o ganho para se pendurar. O jogo tambem conta com varios
                      mini-games para ajudar os NPCs do jogo.
                    </p>
                  </div>
                </li>
                <li>
                  <img src="../../src/assets/Cyberpunk1.png" alt="" />
                  <div>
                    <p>
                      <strong>Cyberpunk Pinball</strong>
                    </p>
                    <p>
                      Nosso projeto testando efetivamente fisicas na Unity 3d e
                      o sistema de particulas e iluiminacao. Criamos uma especie
                      de Pinball com a tematica cyberpunk com inspiracao no
                      classico space pinball do windows X
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </StyledSection2>
      </DivInicial>
    </div>
  );
}

export default App;
