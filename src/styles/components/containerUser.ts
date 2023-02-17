import styled from 'styled-components';

export const ContainerUser = styled.div`
  width: 100vw;
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  animation: fadeIn ease-in-out 1s;
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
      .imgFundo {
        width: 180px;
        height: 180px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(44, 44, 44, 0.9);
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
    gap: .5rem;

    .gerenciar {
      margin-top: 1rem;
      color: #632883;
      letter-spacing: 1px;
      text-transform: uppercase;
      opacity: .5;
      transition: all .5s;
      :hover{
        opacity: 1;
      }
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
`;
