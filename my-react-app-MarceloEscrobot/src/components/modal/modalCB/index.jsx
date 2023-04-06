import React, { Component } from "react";
import { useState } from "react";
import { StyledModalCards } from "../modalCUGA/style";
import imgCB from "../../../assets/Cyberpunk1.png";

export const ModalCBRender = ({ closeModalCB }) => {
  return (
    <StyledModalCards className="modalBackground">
      <div className="modalContainer">
        <img src={imgCB} alt="" />
        <div className="containerInfo">
          <div className="title">
            <h1>Cyberpunk Pinball</h1>
          </div>
          <div className="body">
            <p>
              <strong>Summary:</strong> Nosso projeto testando efetivamente
              fisicas na Unity 3d e o sistema de particulas e iluiminacao.
              Criamos uma especie de Pinball com a tematica cyberpunk com
              inspiracao no classico space pinball do windows XP
            </p>
          </div>
          <div className="footer">
            <p>
              <strong>Desafio:</strong> Balancear a fisica para ser realista a
              um pinball e ao mesmo tempo divertido foram os maiores desafios
              desse prototipo.
            </p>
            <p>
              <strong>Papel: </strong>Game Designer e Programador;{" "}
            </p>
          </div>
          <button onClick={() => closeModalCB(false)}>Close modal</button>
        </div>
      </div>
    </StyledModalCards>
  );
};
