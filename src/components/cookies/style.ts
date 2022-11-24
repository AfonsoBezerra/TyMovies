import styled from 'styled-components';

export const ModalCookiesStyle = styled.div`
  width: 400px;
  height: auto;
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  bottom: 2rem;
  left: 2rem;
  background-color: #e1e1e1;
  z-index: 999;
  box-shadow: 0 0 20px black;
  animation: bottomTop 2s ease-in-out;
  padding: 1.5rem;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .title {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 0.5rem;
      h1 {
        font-size: 18px;
        font-weight: bold;
        letter-spacing: 1px;
        margin: 0;
        padding: 0;
      }
    }
    svg {
      cursor: pointer;
    }
  }

  .body {
    text-align: start;
    word-spacing: 1px;
    font-size: 15px;
  }

  .buttons {
    display: flex;
    justify-content: end;
    align-items: start;
    button {
      padding: 0.5rem 1.5rem;
      border-radius: 40px;
      border: 1px solid black;
      transition: all 0.5s;
      :hover {
        border: 1px solid white;
        background-color: #660472;
        color: white;
      }
    }
  }

  @keyframes bottomTop {
    from {
      bottom: -100px;
      opacity: 0;
    }
    to {
      bottom: 2rem;
      opacity: 1;
    }
  }

  @media (max-width: 600px) {
    width: 300px;
    bottom: 2rem;
    left: 1rem;
    .header {
      .title {
        h1 {
          font-size: 16px;
        }
      }
    }
    .body {
      font-size: 13px;
    }
    .buttons {
      button {
        padding: 0.4rem 1rem;
        font-size: 13px;
      }
    }
  }
`;
