import React, { Component } from "react";
import { useState } from "react";
import { StyledModalCards } from "../modalCUGA/style";
import imgTGA from "../../../assets/Thibrucella2.png";

export const ModalTGARender = ({ closeModalTGA }) => {
  return (
    <StyledModalCards className="modalBackground">
      <div className="modalContainer">
        <img src={imgTGA} alt="" />
        <div className="containerInfo">
          <div className="title">
            <h1>Thibrucela's Great Adventure</h1>
          </div>
          <div className="body">
            <p>
              <strong>Summary:</strong>E O jogo e focado em utilizar a
              cooperacao entre dois personagens com habilidades diferentes.
              Thibrucela consegue carregar caixas enquanto o Gatinho consegue
              usar o ganho para se pendurar. O jogo tambem conta com varios
              mini-games para ajudar os NPCs do jogo.
            </p>
          </div>
          <div className="footer">
            <p>
              <strong>Desafio:</strong> O desafio desse jogo foi integrar os
              diferentes gameplays com o mundo principal e garantir que o
              progresso dos minigames funcionavam corretamente nesse mundo
            </p>
            <p>
              <strong>Papel: </strong> Game Designer e Programador{" "}
            </p>
          </div>
          <button onClick={() => closeModalTGA(false)}>Close modal</button>
        </div>
      </div>
    </StyledModalCards>
  );
};
