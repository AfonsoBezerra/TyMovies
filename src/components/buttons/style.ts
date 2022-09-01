import styled from 'styled-components';

export const ContainerButton = styled.button`
  border: 1px solid white;
  padding: 0.4rem;
  max-height: 40px;
  display: flex;
  align-items: center;
  background-color: transparent;
  color: white;
  border-radius: 10px;
  overflow: hidden;
  transition: inherit;
  transition: all 0.3s ease-in-out;
  h4 {
    margin: 0;
    font-size: 20px;
    white-space: nowrap;
    @media (max-width: 1024px) {
      font-size: 13px;
    }
  }
  :hover {
    color: #fc0303;
    background-color: transparent;
    border-color: #fc0303;
    box-shadow: 0 0 10px rgba(0, 0, 0, 70%);
  }
`;

export const ContainerButtonTrailer = styled.button`
  border: 1px solid #fc0303;
  width: 100%;
  padding: 0 0.4rem;
  max-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fc0303;
  box-shadow: 0 0 10px #fc0303;
  color: white;
  margin-top: 1rem;
  border-radius: 10px;
  overflow: hidden;
  transition: inherit;
  span {
    display: none;
  }
  h4 {
    margin: 0;
    font-size: 20px;
    white-space: nowrap;
    @media (max-width: 1024px) {
      font-size: 13px;
    }
  }
`;
