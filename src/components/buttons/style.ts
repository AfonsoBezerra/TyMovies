import styled from 'styled-components';

export const ContainerButton = styled.button`
  border: 1px solid rgba(255, 255, 255, 0.8);
  padding: 0.4rem;
  max-height: 40px;
  display: flex;
  align-items: center;
  background-color: transparent;
  border-radius: 5px;
  overflow: hidden;
  transition: inherit;
  transition: all 0.3s ease-in-out;
  z-index: 99;
  color: rgba(255, 255, 255, 0.8);
  h4 {
    margin: 0;
    font-size: 16px;
    white-space: nowrap;
    @media (max-width: 1024px) {
      font-size: 13px;
    }
    @media (min-width: 1444px) {
      font-size: 17px;
    }
  }
  :hover {
    color: #8026a1;
    background-color: transparent;
    border-color: #8026a1;
    box-shadow: 0 0 5px #8026a1;
  }
  @media (min-width: 1444px) {
    padding: 1rem;
  }
`;

export const ContainerButtonTrailer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: linear-gradient(
    to right top,
    #8026a1,
    #5c2d83,
    #402c63,
    #2c2640,
    #1d1d1d
  );
  border: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 999;
  margin-right: 1rem;
  span {
    margin-left: 2px;
  }
  @media (min-width: 1024px) {
    opacity: 0.5;
    width: 50px;
    height: 50px;
  }
  @media (min-width: 1444px) {
    width: 60px;
    height: 60px;
    margin-right: 2rem;
  }
  :hover {
    border: 1px solid #8026a1;
    opacity: 1;
  }
`;
