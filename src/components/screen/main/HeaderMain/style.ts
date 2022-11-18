import styled from 'styled-components';

export const HeaderMainStyle = styled.header`
  position: fixed;
  width: 100%;
  height: 70px;
  background-color: rgba(20, 7, 23, 0.7);
  display: flex;
  padding: 0 1rem 0 0;
  justify-content: space-between;
  align-items: center;
  z-index: 9999;
  box-shadow: inset 0px -2px 5px 0px rgba(255, 255, 255, 0.1);
  .containerProfile {
    width: auto;
    height: auto;
    padding: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    .imgFundo {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.8);
    }
  }
  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      color: white;
      font-weight: bold;
      font-size: 15px;
    }
    button {
      padding: 0.4rem 2.7rem;
      border-radius: 20px;
      background-color: #660472;
      color: white;
      margin-left: 2rem;
      font-size: 15px;
      font-weight: bold;
      transition: all 0.5s;
      :hover {
        background-color: white;
        color: #140717;
      }
    }
    @media (max-width: 400px) {
      a {
        font-size: 12px;
      }
      button {
        padding: 0.5rem 2rem;
        margin-left: 1rem;
      }
    }
  }
  @media (max-width: 600px) {
    height: 60px;
  }
`;
