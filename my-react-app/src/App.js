import styled from "styled-components";
import witcherBack from "../src/assets/gamer.gif";

export const DivInicial = styled.section`
  background-image: url(${witcherBack});
  width: 100%;
  height: 100vh;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    margin: 0;
    margin-top: 1%;
    padding: 0;
    display: flex;
    align-items: center;
  }
  p.animate {
    font-size: 1.2rem;
    display: inline-block;
    border-right: 9px solid black;
    padding-right: 3px;
    max-width: 0;
    white-space: nowrap;
    overflow: hidden;
    animation: pisca normal infinite 0.8s, escrever normal 5s steps(55) both;
  }

  @keyframes pisca {
    100% {
      border-right-color: transparent;
    }
  }
  @keyframes escrever {
    100% {
      max-width: 100%;
    }
  }
`;
