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
        `
      : css`
          justify-content: center;
        `}
  align-items: center;
  z-index: 9;
  padding: 1rem;
  transition: all 0.5s ease;
  color: white;
  button {
    width: auto;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 0.8rem;
    border-radius: 5px;
    font-size: 0.7rem;
    font-weight: bold;
    color: rgb(255, 255, 255, 0.9);
    text-transform: uppercase;
  }
  @media (max-width: 1024px) {
    padding: 0.5rem;
    justify-content: space-between;
  }
`;
