import styled from 'styled-components';

export const ContainerTable = styled.div`
  width: 80%;
  height: 100%;
  background-color: #272828;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 0;
  color: white;
  @media (max-width: 1024px) {
    width: 100%;
  }
  .Header {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    h1 {
      width: auto;
      padding: 0;
      margin: 0;
      white-space: nowrap;
      font-size: 20px;
      letter-spacing: 1px;
      font-weight: bold;
      filter: drop-shadow(0 0 1px rgba(252, 3, 3, 0.4));
      @media (min-width: 1024px) {
        font-size: 30px;
      }
    }
    span {
      width: 20%;
      height: 2px;
      background-color: #fc0303;
      margin: 0 2rem;
      box-shadow: 0 0 10px #fc0303;
      border-radius: 2px;
      @media (max-width: 1024px) {
        width: 100%;
        margin: 0 1rem;
      }
    }
  }
`;
