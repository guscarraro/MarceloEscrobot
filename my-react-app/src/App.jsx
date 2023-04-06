import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.js";
import VanillaTilt from "vanilla-tilt";
import { DivInicial, StyledSection2, DivApresentacao } from "./App.js";
import { ModalCugaRender } from "./components/modal/modalCUGA";
import { ModalCwbRender } from "./components/modal/modalCWB";
import { ModalTGARender } from "./components/modal/modalTGA";
import { ModalCBRender } from "./components/modal/modalCB";

function App() {
  const [modalCuga, setModalCuga] = useState(false);
  const [modalCwb, setModalCwb] = useState(false);
  const [modalTGA, setModalTGA] = useState(false);
  const [modalCB, setModalCB] = useState(false);

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".card"), {
      max: 15,
      glare: true,
      speed: 400,
      "max-glare": 1,
    });
  }, []);

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
        <div className="background1"></div>
        <DivApresentacao>
          <p className="animate grande">
            Olá, <br /> Sou Marcelo, <br /> criador de jogos
          </p>
          <div>
            <h4>BIO</h4>
            <p className="pequena">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, incidunt eum? Adipisci, suscipit sapiente incidunt et
              natus beatae quod illum iust tempora tenetur eligendi, autem
              reprehenderit eos at, repudiandae ut. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Quae libero, est aliquid aut
              dolorum, eaque alias, fugiat quasi expedita iste recusandae
              accusamus numquam! Repellendus excepturi quibusdam aut sint vitae
              voluptatibus?
            </p>
          </div>
        </DivApresentacao>

        <div className="background2"></div>
        <StyledSection2>
          <div className="divProjetos">
            <h4 className="name1">Projetos</h4>
            <p className="name2">Projetos</p>
            <div className="divUlcards">
              <ul className="containerCardList">
                <li onClick={() => setModalCuga(true)} className="card CYGA">
                  {/* <img src="../../src/assets/canUGet AwayP1.png" alt="" /> */}
                  <div className="content">
                    <h2>01</h2>
                    <h3>
                      <strong>Can you get away</strong>
                    </h3>
                    <p>
                      Can you get away e um jogo multiplayer local onde o seu
                      objetivo e derrotar o outro jogador. Um dos meus primeiros
                      projetos 3d na Unity. A cada partida o cenario e os spawns
                      de item mudam de local para manter as partidas sempre
                      dinamicas.
                    </p>
                    <a>Click para mais informações</a>
                  </div>
                </li>
                <li onClick={() => setModalCwb(true)} className="card CWB">
                  <div className="content">
                    <h2>02</h2>
                    <h3>
                      <strong>CWBATTLE</strong>
                    </h3>
                    <p>
                      Meu primeiro projeto baseado em unity. Trabalhei como game
                      designer e artista para o Curitibinha. O jogo tinha como
                      premissa valorizar a cultura Curitibana entao decidimos
                      criar um jogo de luta ao estilo smash bros em 2d. Onde vc
                      deve derrubar o inimigo do mapa.
                    </p>
                    <a>Click para mais informações</a>
                  </div>
                </li>
                <li onClick={() => setModalTGA(true)} className="card TGA">
                  <div className="content">
                    <h2>03</h2>
                    <h3>
                      <strong>Thibrucela's Great Adventure</strong>
                    </h3>
                    <p>
                      E O jogo e focado em utilizar a cooperacao entre dois
                      personagens com habilidades diferentes. Thibrucela
                      consegue carregar caixas enquanto o Gatinho consegue usar
                      o ganho para se pendurar. O jogo tambem conta com varios
                      mini-games para ajudar os NPCs do jogo.
                    </p>
                    <a>Click para mais informações</a>
                  </div>
                </li>
                <li onClick={() => setModalCB(true)} className="card CB">
                  <div className="content">
                    <h2>04</h2>
                    <h3>
                      <strong>Cyberpunk Pinball</strong>
                    </h3>
                    <p>
                      Nosso projeto testando efetivamente fisicas na Unity 3d e
                      o sistema de particulas e iluiminacao. Criamos uma especie
                      de Pinball com a tematica cyberpunk com inspiracao no
                      classico space pinball do windows X
                    </p>
                    <a>Click para mais informações</a>
                  </div>
                </li>
                {modalCuga && <ModalCugaRender closeModalCuga={setModalCuga} />}
                {modalCwb && <ModalCwbRender closeModal={setModalCwb} />}
                {modalTGA && <ModalTGARender closeModalTGA={setModalTGA} />}
                {modalCB && <ModalCBRender closeModalCB={setModalCB} />}
              </ul>
            </div>
          </div>
        </StyledSection2>
      </DivInicial>
    </div>
  );
}

export default App;
