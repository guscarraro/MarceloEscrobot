import styled from "styled-components";

export const StyledModalCards = styled.div`
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 80vh;
  align-items: center;
  position: fixed;
  left: 20%;
  top: 10%;
  bottom: 50%;
  right: 50%;
  border: solid 2px white;
  z-index: 1000;
  border-radius: 20px;
  opacity: 0.9;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  align-content: space-between;

  img {
    background-image: linear-gradient(
        to bottom,
        rgba(255, 0, 0, 0),
        rgba(0, 0, 0, 255)
      ),
      url("../../src/assets/editadoGIF2.gif");
    width: 100%;
    height: 30vh;
    position: absolute;
    background-size: 100% 100%;
    top: 0px;
    border-bottom: solid 1px white;
    border-radius: 20px;
  }
  button {
    background: white;
    color: black;
    border-radius: 20px;
    border: solid 2px black;
  }
  button:hover {
    background: black;
    color: white;
    border-radius: 20px;
    border: solid 2px white;
  }

  .containerInfo {
    max-width: 90%;
    display: flex;
    flex-direction: column;
    position: absolute;
    justify-content: space-between;
    align-items: center;
    bottom: 10%;
  }
  .modalContainer {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 15px;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
`;
