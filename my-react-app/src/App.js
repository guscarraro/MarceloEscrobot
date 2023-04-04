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
  header {
    /* position: fixed; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    font-size: small;

    h5 {
      display: flex;
      background-image: url("../../src/assets/p2.png");
      opacity: 0.7;
      width: 20%;
      height: 100px;
      background-size: 100% 100%;
      align-items: center;
      justify-content: center;
    }
    nav {
      display: flex;
      width: 100%;
      p {
        display: flex;
        background-image: url("../../src/assets/p.png");
        opacity: 0.7;
        width: 20%;
        height: 100px;
        background-size: 100% 100%;
        align-items: center;
        justify-content: center;
      }
    }
  }
  div {
    margin: 0;
    margin-top: 10%;
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

export const StyledSection2 = styled.section`
  width: 100%;
  margin: 0;
  padding: 0;
  .game-board {
    margin-top: 10px;
    width: 100%;
    height: 500px;
    /* border: 1px solid black; */
    position: relative;
    overflow: hidden;
  }
  .pipe {
    position: absolute;
    bottom: 0;
    width: 80px;
    animation: pipe-animations 3s infinite linear;
  }
  .mario {
    width: 150px;
    position: absolute;
    bottom: 0;
  }
  .jump {
    animation: jump 4s infinite ease-out;
  }

  @keyframes jump {
    0% {
      bottom: 0;
    }
    40% {
      bottom: 180px;
    }
    50% {
      bottom: 180px;
    }
    60% {
      bottom: 180px;
    }
    100% {
      bottom: 0;
    }
  }
  @keyframes pipe-animations {
    from {
      right: -80px;
    }
    to {
      right: 100%;
    }
  }
`;
