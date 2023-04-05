import styled from "styled-components";
import witcherBack from "../src/assets/gamer.gif";

export const DivInicial = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  header {
    position: fixed;
    height: 40px;
    color: white;
    opacity: 0.6;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    font-size: small;
  }
  div {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }
  p.animate {
    font-size: 1.2rem;
    display: inline-block;
    border-right: 9px solid white;
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
  display: flex;
  background-color: black;
  width: 100%;
  height: 80vh;
  background-size: 100% 100%;
  margin: 0;
  padding: 0;
  color: white;
  background-color: black;

  .divProjetos {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .name1 {
    position: absolute;
    font-size: 60px;
    top: 92vh;
    left: 50%;
    opacity: 0.1;
  }
  .name2 {
    position: absolute;
    top: 100vh;
    left: 50%;
    font-size: 40px;
  }
  .divUlcards {
    margin-top: 10%;
  }

  overflow: scroll;
  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
    li {
      border: solid 2px white;
      position: relative;
      width: 700px;
      list-style: none;
      margin: 0px;
      padding: 50px;
      display: flex;
      flex-direction: row;
      -webkit-box-align: center;
      align-items: center;
      justify-content: center;
      align-content: space-around;
      div {
        display: flex;
        flex-direction: column;
        -webkit-box-align: center;
        align-items: center;
        justify-content: center;
      }
      img {
        width: 100px;
        height: 100px;
        background-size: 100% 100%;
      }
    }
  }
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

export const DivApresentacao = styled.div`
  background-image: url("../../src/assets/fundo.jpg");
  width: 100%;
  height: 100vh;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  color: white;

  .animate.pequena {
    font-size: small;
  }
  .animate.grande {
    margin-top: 15%;
    font-size: 40px;
  }
  p {
    padding: 20px;
  }
  img {
    width: 50px;
    height: 50px;
    background-size: 100% 100%;
  }
`;
