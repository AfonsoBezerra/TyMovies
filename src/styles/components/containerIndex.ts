import styled from 'styled-components';

export const ContainerIndex = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  .video {
    width: 100%;
    height: 100vh;
    padding-top: 70px;
    position: relative;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .conteudo {
      position: absolute;
      z-index: 8;
      width: 100%;
      bottom: 0;
      height: 400px;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h3 {
        color: white;
        font-size: 18px;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      h2 {
        color: white;
        font-size: 23px;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 1px;
      }
      span {
        margin-top: 0.5rem;
        width: 90%;
        height: 2px;
        background-color: #660472;
        @media (min-width: 600px) {
          width: 50%;
        }
        @media (min-width: 1024px) {
          width: 400px;
        }
      }
    }
    .transition {
      width: 100vw;
      height: 1800px;
      position: absolute;
      bottom: 0;
      z-index: 1;
      background-image: linear-gradient(
        rgba(20, 7, 23, 0) 62.03%,
        rgba(20, 7, 23, 0.008) 64.56%,
        rgba(20, 7, 23, 0.035) 67.09%,
        rgba(20, 7, 23, 0.082) 69.62%,
        rgba(20, 7, 23, 0.15) 72.16%,
        rgba(20, 7, 23, 0.23) 74.69%,
        rgba(20, 7, 23, 0.333) 77.22%,
        rgba(20, 7, 23, 0.443) 79.75%,
        rgba(20, 7, 23, 0.557) 82.28%,
        rgba(20, 7, 23, 0.667) 84.81%,
        rgba(20, 7, 23, 0.77) 87.34%,
        rgba(20, 7, 23, 0.85) 89.87%,
        rgba(20, 7, 23, 0.918) 92.41%,
        rgba(20, 7, 23, 0.965) 94.94%,
        rgba(20, 7, 23, 0.992) 97.47%
      );
    }
  }
  .content {
    width: 100%;
    height: 100vh;
    background-color: rgba(20, 7, 23);
  }
`;
