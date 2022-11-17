import styled from 'styled-components';

export const ContainerUserRemove = styled.div`
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

    span {
      font-size: 18px;
      color: rgba(255, 255, 255, 0.8);
      font-weight: 500;
      text-align: center;
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
    display: flex;
    width: 100%;
    margin-top: 2rem;
    justify-content: space-evenly;
    button {
      min-width: 100px;
      font-size: 13px;
      background-image: linear-gradient(
        to right top,
        #8b8b8b80,
        #78787880,
        #65656580,
        #53535380,
        #42424280
      );
      padding: 0.6rem 1.5rem;
      border-radius: 20px;
      font-weight: bolder;
      letter-spacing: 1px;
      color: rgba(255, 255, 255, 0.6);
      text-transform: uppercase;
      transition: all 0.5s;
      :hover {
        color: rgba(255, 255, 255, 1);
        transform: scale(1.08);
      }
    }
    .excluir {
      background-image: linear-gradient(
        to right top,
        #530049,
        #480243,
        #3d043c,
        #330435,
        #29042e
      );
    }
    @media (min-width: 768px) {
      width: 60%;
    }
    @media (min-width: 1024px) {
      width: 40%;
    }
    @media (min-width: 1920px) {
      width: 20%;
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
