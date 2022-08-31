import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 85px;
  position: fixed;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  z-index: 9;
  padding: 1rem 1rem 0rem 1rem;
  transition: all 0.5s ease;
  @media (max-width: 1024px) {
    justify-content: center;
  }
`;
