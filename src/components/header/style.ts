import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 50px;
  position: fixed;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
  padding: 0 1rem 0rem 1rem;
  transition: all 0.5s ease;
  @media (max-width: 1024px) {
    justify-content: center;
  }
`;
