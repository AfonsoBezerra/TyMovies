import styled from 'styled-components';

export const Hero = styled.div`
  width: 100%;
  position: relative;
  animation: fadeIn 2s ease-in-out;
  .voltar {
    position: absolute;
    top: 7rem;
    left: 1.7rem;
    z-index: 99;
    width: auto;
    height: auto;
    cursor: pointer;
    @media (max-width: 767px) {
      left: 1rem;
    }
    :hover {
      animation: go-back 0.6s infinite alternate;
    }
  }
  .transition {
    width: 100vw;
    height: 450px;
    position: absolute;
    bottom: 0;
    z-index: 1;
    background-image: linear-gradient(
      rgba(0, 0, 0, 0) 62.03%,
      rgba(0, 0, 0, 0.008) 64.56%,
      rgba(0, 0, 0, 0.035) 67.09%,
      rgba(0, 0, 0, 0.082) 69.62%,
      rgba(0, 0, 0, 0.15) 72.16%,
      rgba(0, 0, 0, 0.23) 74.69%,
      rgba(0, 0, 0, 0.333) 77.22%,
      rgba(0, 0, 0, 0.443) 79.75%,
      rgba(0, 0, 0, 0.557) 82.28%,
      rgba(0, 0, 0, 0.667) 84.81%,
      rgba(0, 0, 0, 0.77) 87.34%,
      rgba(0, 0, 0, 0.85) 89.87%,
      rgba(0, 0, 0, 0.918) 92.41%,
      rgba(0, 0, 0, 0.965) 94.94%,
      rgba(0, 0, 0, 0.992) 97.47%,
      rgb(0, 0, 0) 100%
    );
  }
`;

export const Container = styled.div`
  padding: 2rem 0;
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: end;
  position: relative;
  background-color: transparent;
  > span img {
    opacity: 30%;
    object-fit: cover;
    @media (min-width: 1444px) {
      object-fit: fill;
    }
  }

  .hero-detail {
    width: 90%;
    height: auto;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 999;
    h1 {
      font-size: 20px;
      font-weight: bold;
      color: rgba(255, 255, 255, 0.8);
    }
    span {
      display: block;
      display: -webkit-box;
      max-width: 100%;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      font-size: 15px;
      overflow: hidden;
      opacity: .8;
      color: rgba(255, 255, 255, 0.8);
      text-overflow: ellipsis;
      text-align: center;
      font-size: 14px;
    }
    .buttons {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem 0;
    }
    @media (min-width: 1024px) {
      align-items: start;
      h1 {
        font-size: 33px;
      }
      span {
        text-align: start;
        max-width: 70%;
      }
      .buttons {
        justify-content: start;
      }
    }
    @media (min-width: 1444px) {
      align-items: start;
      span {
        max-width: 60%;
        
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
  @keyframes go-back {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(-10px);
    }
  }
`;
