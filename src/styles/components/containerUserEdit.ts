import styled from 'styled-components';

export const ContainerUserEdit = styled.div`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  animation: fadeIn ease-in-out 1s;
  .fundoModal {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 999;
    background: linear-gradient(
      to left top,
      #240930,
      #20092a,
      #1d0923,
      #19081d,
      #140717,
      #110714,
      #0e0710,
      #0a070c,
      #09080b,
      #09080b,
      #09090a,
      #090909
    );
    @media (max-width: 320px) {
      height: 150vh;
    }
    @media (max-width: 375px) {
      height: 230vh;
    }
  }
  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
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
    .img {
      margin: 1rem 0 1rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.2rem;
      width: auto;
      height: auto;
      border-radius: 50%;
      .imgFundo {
        position: relative;
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
        .iconEdit {
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid white;
          position: absolute;
          transform: translateY(50%);
          bottom: 0;
          border-radius: 50%;
        }
      }
    }
    .colors {
      margin-top: 1rem;
      display: flex;
      justify-content: space-evenly;
      width: 90%;
      button {
        width: 30px;
        height: 30px;
        background-color: black;
        border-radius: 50%;
        transition: all 0.5s;
      }
      .active {
        border: 1px solid rgba(255, 255, 255, 1);
        transform: scale(1.1);
      }
    }
    .nameInput {
      margin-top: 2.5rem;
      width: 80%;
      span {
        font-size: 17px;
        color: rgba(255, 255, 255, 0.9);
      }
      input {
        margin-top: 0.2rem;
        width: 100%;
        background-color: transparent;
        color: rgba(255, 255, 255, 0.9);
        border: 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        padding: 0.5rem 0;
        transition: all 0.5s;
        outline: none;
      }
      input:focus {
        border-bottom: 1px solid white;
      }
    }
    @media (min-width: 768px) {
      width: 60%;
    }
    @media (min-width: 1024px) {
      width: 40%;
    }
    @media (min-width: 1440px) {
      width: 30%;
    }
    @media (min-width: 1920px) {
      width: 20%;
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
    .salvar {
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

  .apagar {
    margin-top: 2rem;
    color: #632883;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;
