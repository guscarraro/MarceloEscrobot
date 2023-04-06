import React, { Component } from "react";
import { useState } from "react";
import { StyledModalCards } from "./style";

export const ModalCugaRender = ({ closeModalCuga }) => {
  return (
    <StyledModalCards className="modalBackground">
      <div className="modalContainer">
        <img src="../../src/assets/CanUGet AwayP1.png" alt="" />
        <div className="containerInfo">
          <div className="title">
            <h1>Can you get away</h1>
          </div>
          <div className="body">
            <p>
              <strong>Summary:</strong> Can you get away e um jogo multiplayer
              local onde o seu objetivo e derrotar o outro jogador. Um dos meus
              primeiros projetos 3d na Unity. A cada partida o cenario e os
              spawns de item mudam de local para manter as partidas sempre
              dinamicas.
            </p>
          </div>
          <div className="footer">
            <p>
              <strong>Desafio:</strong> Um dos maiores desafios desse jogo foi
              adaptar a movimentacao dos personagens com o angulo da camera e o
              controle. Digamos que ate hoje, ele ainda nao esta 100%
            </p>
            <p>
              {" "}
              <strong>Papel:</strong> Game Designer e Programador;
            </p>
          </div>
          <button onClick={() => closeModalCuga(false)}>Close modal</button>
        </div>
      </div>
    </StyledModalCards>
  );
};
