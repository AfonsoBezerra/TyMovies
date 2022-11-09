import styled, { css } from 'styled-components';

interface iContainer {
  justCenter: boolean;
}

export const Container = styled.header<iContainer>`
  width: 100vw;
  height: auto;
  position: fixed;
  background-color: transparent;
  display: flex;
  ${({ justCenter }) =>
    justCenter
      ? css`
          justify-content: space-between;
          padding: 1rem;
        `
      : css`
          justify-content: center;
          padding: 2rem 1rem;
        `}
  align-items: center;
  z-index: 9;
  transition: all 0.5s ease;
  color: white;
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
  @media (max-width: 1024px) {
    ${({ justCenter }) =>
      justCenter
        ? css``
        : css`
            justify-content: center;
            padding: 1.5rem 1rem;
          `}
  }
`;
