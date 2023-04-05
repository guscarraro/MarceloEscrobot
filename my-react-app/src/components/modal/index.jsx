import React, { Component } from "react";
import { useState } from "react";

export const PrimeiroModal = () => {
  const [modal, setModal] = useState(false);

  if (modal) {
    return (
      <StyledModal>
        <div>Oi</div>
      </StyledModal>
    );
  }
};
