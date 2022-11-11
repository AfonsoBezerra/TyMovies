import styled from 'styled-components';

export const ContainerAuthentication = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 10rem;
  .mensage {
    width: auto;
    height: auto;
    padding: 2rem;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    text-align: center;
    backdrop-filter: blur(5px);
    h1 {
      color: #f3f3f3;
      font-weight: bolder;
      font-size: 22px;
    }
    span {
      color: #f3f3f3;
      font-size: 15px;
    }
    .buttons {
      margin-top: 2rem;
      width: 100%;
      display: flex;
      justify-content: space-around;
      button {
        width: 25%;
        display: flex;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.1);
        padding: 0.5rem 1rem;
        border-radius: 5px;
        font-size: 0.8rem;
        font-weight: bold;
        color: rgb(255, 255, 255, 0.7);
        text-transform: uppercase;
      }
    }
    @media (max-width: 700px) {
      width: 90%;
    }
  }
`;
