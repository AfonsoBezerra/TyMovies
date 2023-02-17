import styled, { css } from 'styled-components';

interface iContainer {
  justCenter: boolean;
}

export const Container = styled.header<iContainer>`
  width: 100%;
  height: auto;
  position: fixed;
  background-color: transparent;
  display: flex;
  ${({ justCenter }) =>
    justCenter
      ? css`
          justify-content: space-between;
          padding: 0.5rem 1rem;
        `
      : css`
          justify-content: center;
          padding: 2rem 1rem;
        `}
  align-items: center;
  z-index: 9;
  transition: all 0.5s ease;
  color: white;
  animation: fadeIn 1s;
  button {
    width: auto;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 0.5rem 0.8rem;
    border-radius: 5px;
    font-size: 0.7rem;
    font-weight: bold;
    color: rgb(255, 255, 255, 1);
    text-transform: uppercase;
  }

  .containerProfile {
    width: auto;
    height: auto;
    padding: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    .imgFundo {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.8);
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media (max-width: 1024px) {
    ${({ justCenter }) =>
      justCenter
        ? css`
            padding: 0.5rem 1rem;
          `
        : css`
            justify-content: center;
            padding: 1.5rem 1rem;
          `}
  }
`;
