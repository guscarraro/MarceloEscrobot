import styled from "styled-components";
export const DivInicial = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .background1 {
    background-image: linear-gradient(
        to bottom,
        rgba(255, 0, 0, 0),
        rgba(0, 0, 0, 255)
      ),
      url("../../src/assets/editadoGIF2.gif");
    width: 100%;
    height: 100vh;
    background-size: 100% 100%;
  }
  header {
    position: fixed;
    height: 100%;
    /* color: white; */
    /* opacity: 0.6; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 70px;
    font-size: small;
    right: 95%;
    bottom: 20;
    background: rgba(255, 255, 255, 0.4);
    color: black;
  }
  footer {
    width: 100%;
    display: flex;
    flex-direction: row;
    background: white;
    color: black;
    justify-content: flex-end;
    font-size: 10px;
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    img {
      width: 15px;
      height: 15px;
    }
    a {
      text-decoration: none;
    }
  }

  p.animate {
    color: white;
    font-size: 1.2rem;
    font-weight: 700;
    display: inline-block;
    border-right: 9px solid white;
    padding-right: 3px;
    max-width: 100px;
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
export const SectionSkill = styled.section`
  background-color: black;
  width: 100%;
  height: 60vh;

  margin: 0;
  padding: 0;
  color: white;
  background-color: black;
  .text1 {
    position: absolute;
    font-size: 60px;
    top: 92vh;
    left: 41%;
    opacity: 0.4;
  }
  .text2 {
    position: absolute;
    top: 100vh;
    left: 40%;
    font-size: 40px;
  }
`;

export const StyledSection2 = styled.section`
  background-image: linear-gradient(
      to top,
      rgba(255, 255, 255, 255),
      rgba(255, 0, 0, 0),
      rgba(0, 0, 0, 255)
    ),
    url("../../src/assets/editadoGIF (1).gif");

  display: flex;
  width: 100%;
  height: auto;
  background-size: 100% 100%;
  margin: 0;
  padding: 0;
  color: white;
  background-color: black;
  padding-bottom: 5%;

  .divProjetos {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .name1 {
    position: absolute;
    font-size: 60px;
    top: 142vh;
    left: 41%;
    opacity: 0.4;
  }
  .name2 {
    position: absolute;
    top: 150vh;
    left: 40%;
    font-size: 40px;
  }
  .divUlcards {
    margin-top: 10%;
  }

  .containerCardList {
    margin-left: 5%;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    flex-wrap: wrap;
    z-index: 1;
     {
      .CYGA {
      }
      .CYGA {
        position: relative;
        width: 350px;
        height: 350px;
        /* margin: 10px; */
        box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.8);
        list-style: none;
        /* border-radius: 15px; */
        background: rgba(255, 255, 255, 0.1);
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid rgba(255, 255, 255, 0.5);
        border-left: 1px solid rgba(255, 255, 255, 0.5);
        background-image: linear-gradient(
            to top,

            rgba(255, 0, 0, 0),
            rgba(0, 0, 0, 255)
          ),
          url("../../src/assets/CanUGet AwayP1.png");
        width: 280;
        height: 280;
        background-size: 100% 100%;
        .content {
          padding: 20px;
          text-align: center;
          transform: translateY(150px);
          opacity: 0;
          transition: 0.5s;
          h2 {
            position: absolute;
            top: -80px;
            right: 30px;
            font-size: 8rem;
            color: rgba(255, 255, 255, 0.2);
          }
          h3 {
            font-size: 1.8rem;
            color: white;
            z-index: 1;
          }
          p {
            font-size: 0.8rem;
            color: white;
            font-weight: 300;
          }
          a {
            position: relative;
            display: inline-block;
            padding: 8px 20px;
            margin-top: 10px;
            background-color: #fff;
            color: black;
            text-decoration: none;
            border-radius: 20px;
            font-weight: 500;
            box-shadow: 0 5px 15px (0, 0, 0, 0.2);
          }
        }
      }
      .card:hover {
        .content {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      .CWB {
        position: relative;
        width: 350px;
        height: 350px;
        /* margin: 10px; */
        box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.8);
        list-style: none;
        /* border-radius: 15px; */
        background: rgba(255, 255, 255, 0.1);
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid rgba(255, 255, 255, 0.5);
        border-left: 1px solid rgba(255, 255, 255, 0.5);
        background-image: linear-gradient(
            to top,

            rgba(255, 0, 0, 0),
            rgba(0, 0, 0, 255)
          ),
          url("../../src/assets/CWBattle1.png");

        background-size: 100% 100%;
        .content {
          padding: 20px;
          text-align: center;
          transform: translateY(150px);
          opacity: 0;
          transition: 0.5s;
          h2 {
            position: absolute;
            top: -80px;
            right: 30px;
            font-size: 8rem;
            color: rgba(255, 255, 255, 0.2);
          }
          h3 {
            font-size: 1.8rem;
            color: white;
            z-index: 1;
          }
          p {
            font-size: 0.8rem;
            color: white;
            font-weight: 300;
          }
          a {
            position: relative;
            display: inline-block;
            padding: 8px 20px;
            margin-top: 10px;
            background-color: #fff;
            color: black;
            text-decoration: none;
            border-radius: 20px;
            font-weight: 500;
            box-shadow: 0 5px 15px (0, 0, 0, 0.2);
          }
        }
      }
      .card:hover {
        .content {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      .TGA {
        position: relative;
        width: 350px;
        height: 350px;
        /* margin: 10px; */
        box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.8);
        list-style: none;
        /* border-radius: 15px; */
        background: rgba(255, 255, 255, 0.1);
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid rgba(255, 255, 255, 0.5);
        border-left: 1px solid rgba(255, 255, 255, 0.5);
        background-image: linear-gradient(
            to top,

            rgba(255, 0, 0, 0),
            rgba(0, 0, 0, 255)
          ),
          url("../../src/assets/Thibrucella2.png");

        background-size: 100% 100%;
        .content {
          padding: 20px;
          text-align: center;
          transform: translateY(150px);
          opacity: 0;
          transition: 0.5s;
          h2 {
            position: absolute;
            top: -80px;
            right: 30px;
            font-size: 8rem;
            color: rgba(255, 255, 255, 0.2);
          }
          h3 {
            font-size: 1.8rem;
            color: white;
            z-index: 1;
          }
          p {
            font-size: 0.8rem;
            color: white;
            font-weight: 300;
          }
          a {
            position: relative;
            display: inline-block;
            padding: 8px 20px;
            margin-top: 10px;
            background-color: #fff;
            color: black;
            text-decoration: none;
            border-radius: 20px;
            font-weight: 500;
            box-shadow: 0 5px 15px (0, 0, 0, 0.2);
          }
        }
      }
      .card:hover {
        .content {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      .CB {
        position: relative;
        width: 350px;
        height: 350px;
        /* margin: 10px; */
        box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.8);
        list-style: none;
        /* border-radius: 15px; */
        background: rgba(255, 255, 255, 0.1);
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid rgba(255, 255, 255, 0.5);
        border-left: 1px solid rgba(255, 255, 255, 0.5);
        background-image: linear-gradient(
            to top,

            rgba(255, 0, 0, 0),
            rgba(0, 0, 0, 255)
          ),
          url("../../src/assets/Cyberpunk1.png");
        width: 280;
        height: 280;
        background-size: 100% 100%;
        .content {
          padding: 20px;
          text-align: center;
          transform: translateY(150px);
          opacity: 0;
          transition: 0.5s;
          h2 {
            position: absolute;
            top: -80px;
            right: 30px;
            font-size: 8rem;
            color: rgba(255, 255, 255, 0.2);
          }
          h3 {
            font-size: 1.8rem;
            color: white;
            z-index: 1;
          }
          p {
            font-size: 0.8rem;
            color: white;
            font-weight: 300;
          }
          a {
            position: relative;
            display: inline-block;
            padding: 8px 20px;
            margin-top: 10px;
            background-color: #fff;
            color: black;
            text-decoration: none;
            border-radius: 20px;
            font-weight: 500;
            box-shadow: 0 5px 15px (0, 0, 0, 0.2);
          }
        }
      }
      .card:hover {
        .content {
          transform: translateY(0px);
          opacity: 1;
        }
      }
    }
  }
`;

export const DivApresentacao = styled.div`
  width: 100%;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  position: absolute;
  top: 40%;
  left: 55%;
  transform: translate(-50%, -50%);
  width: 80%;
  padding: 20px;
  text-align: center;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  /* div {
    max-width: 300px;
  } */

  .animate.pequena {
    width: 100%;
    font-size: small;
  }
  h4 {
    font-size: 20px;
  }
  .animate.grande {
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
