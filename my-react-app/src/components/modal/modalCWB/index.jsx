import React, { Component } from "react";
import { useState } from "react";
import { StyledModalCards } from "../modalCUGA/style";

export const ModalCwbRender = ({ closeModal }) => {
  return (
    <StyledModalCards className="modalBackground">
      <div className="modalContainer">
        <img src="../../src/assets/CWBattle1.png" alt="" />
        <div className="containerInfo">
          <div className="title">
            <h1>CWBATTLE</h1>
          </div>
          <div className="body">
            <p>
              <strong>Summary:</strong> Meu primeiro projeto baseado em unity.
              Trabalhei como game designer e artista para o Curitibinha. O jogo
              tinha como premissa valorizar a cultura Curitibana entao decidimos
              criar um jogo de luta ao estilo smash bros em 2d. Onde vc deve
              derrubar o inimigo do mapa.
            </p>
          </div>
          <div className="footer">
            <p>
              <strong>Desafio:</strong> O maior desafio foi criar uma forma de
              derrubar os personagens com uma fisica 2d. ]
            </p>
            <p>
              <strong>Papel: </strong> Game Designer e Artista de Personagem{" "}
            </p>
          </div>
          <button onClick={() => closeModal(false)}>Close modal</button>
        </div>
      </div>
    </StyledModalCards>
  );
};
