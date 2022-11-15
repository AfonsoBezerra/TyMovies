import styled from 'styled-components';

export const ContainerUserEdit = styled.div`
  width: 100vw;
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  .title {
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    h1 {
      font-size: 27px;
      color: rgba(255, 255, 255, 0.8);
      font-weight: 700;
    }
  }
  .image {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      font-size: 18px;
      color: rgba(255, 255, 255, 0.8);
      font-weight: 500;
    }
    .img {
      margin: 2rem 0 1rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.2rem;
      width: auto;
      height: auto;
      border-radius: 50%;
      background-image: linear-gradient(
        to right top,
        #600292,
        #823f9e,
        #9e6bab,
        #b698b9,
        #c9c5c9
      );
      .imgFundo {
        width: 180px;
        height: 180px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.8);
        border-radius: 50%;
        svg {
          width: 100%;
          height: 100%;
        }
      }
    }
    span {
      font-size: 15px;
      color: rgba(255, 255, 255, 0.8);
      font-weight: 500;
    }
  }
  .buttons {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .gerenciar {
      margin-top: 2rem;
      color: #632883;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
  }
`;
