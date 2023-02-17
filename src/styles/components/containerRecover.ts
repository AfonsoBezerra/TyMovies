import styled from 'styled-components';

export const PageRecover = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    width: auto;
    min-width: 500px;
    height: auto;
    padding: 2rem;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    backdrop-filter: blur(5px);
    button {
      width: auto;
      display: flex;
      height: 45px;
      justify-content: center;
      align-items: center;
      background-color: rgba(255, 255, 255, 0.1);
      padding: 1rem;
      border-radius: 5px;
      font-size: 0.7rem;
      font-weight: bold;
      color: rgb(255, 255, 255, 0.7);
      text-transform: uppercase;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      span {
        font-size: 15px;
        text-align: center;
        color: rgb(255, 255, 255, 0.7);
      }

      .FormFlex {
        display: flex;
        justify-content: space-between;
        align-items: start;
        height: auto;
        label {
          width: 100%;
          input {
            width: 90%;
            align-self: center;
            background-color: rgba(0, 0, 0, 0.2);
            border-color: rgba(255, 255, 255, 0.3);
            border-radius: 8px;
            color: rgb(255, 255, 255);
            height: 45px;
            padding-left: 12px;
            font-family: StreetLCG2, sans-serif;
            font-weight: 400;
            font-style: normal;
            font-size: 16px;
            letter-spacing: 0px;
            margin-bottom: 0.5rem;
          }
        }
      }
    }
    .separator {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 1rem;
      span {
        width: 100%;
        height: 1px;
        background-color: rgba(255, 255, 255, 0.5);
      }
    }
    .buttons {
      display: flex;
      justify-content: space-between;
      align-items: end;
      margin-top: 1rem;
    }
    @media (max-width: 600px) {
      min-width: 90%;
      max-width: 90%;
    }
  }
`;
