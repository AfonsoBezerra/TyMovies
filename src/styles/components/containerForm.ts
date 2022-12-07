import styled from 'styled-components';

export const FormStyle = styled.div`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 10rem 0 5rem 0;
  color: white;
  background-image: linear-gradient(
    to left top,
    #39134c,
    #311341,
    #291336,
    #21112b,
    #1a0f20,
    #170c1a,
    #130a14,
    #0d070d,
    #0b0509,
    #080306,
    #040203,
    #000000
  );
  > h1 {
    font-weight: bold;
    color: rgb(255, 255, 255, 0.9);
  }
  .containerForm {
    width: 50%;
    height: auto;
    margin-top: 1rem;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.05);
    padding: 3rem;
    backdrop-filter: blur(5px);
    .error {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: 1rem;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .passWithIcon {
        display: flex;
        position: relative;
        width: 100%;
        align-items: center;
        svg {
          position: absolute;
          right: 1rem;
          cursor: pointer;
        }
      }
      input {
        align-self: center;
        background-color: rgba(0, 0, 0, 0.2);
        border-color: rgba(255, 255, 255, 0.3);
        border-radius: 8px;
        color: rgb(255, 255, 255);
        height: 56px;
        padding-left: 12px;
        width: 100%;
        font-family: StreetLCG2, sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 16px;
        letter-spacing: 0px;
        margin-bottom: 0.5rem;
      }
      .passWithIcon input {
        padding-right: 3rem;
      }
      .buttonsForm {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1.4rem;
        button {
          width: 25%;
          display: flex;
          justify-content: center;
          background-color: rgba(255, 255, 255, 0.1);
          padding: 1rem 3rem;
          margin-right: 2rem !important;
          border-radius: 5px;
          font-size: 0.8rem;
          font-weight: bold;
          color: rgb(255, 255, 255, 0.7);
          text-transform: uppercase;
        }
        a {
          color: #632883;
          font-weight: bolder;
          font-size: 1.2rem;
        }
      }
    }
    .separator {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 1.5rem;
      span {
        width: 100%;
        height: 1px;
        background-color: rgba(255, 255, 255, 0.5);
      }
      h3 {
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: bolder;
        padding: 0 1rem;
        margin: 0;
      }
    }
    .buttonGoogle {
      margin-top: 1.5rem;
      width: 100%;
      display: flex;
      justify-content: space-between;
      button img {
        width: 200px;
      }
      .cadas {
        width: 25%;
        display: flex;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.1);
        padding: 1rem 3rem;
        border-radius: 5px;
        font-size: 0.8rem;
        font-weight: bold;
        color: rgb(255, 255, 255, 0.7);
        text-transform: uppercase;
        margin-right: 0;
      }
    }
    @media (max-width: 768px) {
      width: 90%;
      padding: 2rem;
      form {
        input {
          height: 46px;
        }
        .buttonsForm {
          button {
            font-size: 0.7rem;
          }
          a {
            font-size: 0.8rem;
          }
        }
      }
      .separator {
        h3 {
          font-size: 0.7rem;
        }
      }
      .buttonGoogle {
        button img {
          width: 150px;
        }
        .cadas {
          font-size: 0.7rem;
        }
      }
    }
  }
  @media (max-width: 768px) {
    padding-top: 6rem;
  }
`;
