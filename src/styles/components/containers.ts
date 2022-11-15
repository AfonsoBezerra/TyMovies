import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 99;

  .transition {
    width: 100vw;
    height: 180px;
    position: absolute;
    top: 0;
    z-index: 0;
    background-image: linear-gradient(
      rgb(0, 0, 0),
      rgba(0, 0, 0, 0.992) 6.67%,
      rgba(0, 0, 0, 0.965) 13.33%,
      rgba(0, 0, 0, 0.918) 20%,
      rgba(0, 0, 0, 0.85) 26.67%,
      rgba(0, 0, 0, 0.77) 33.33%,
      rgba(0, 0, 0, 0.667) 40%,
      rgba(0, 0, 0, 0.557) 46.67%,
      rgba(0, 0, 0, 0.443) 53.33%,
      rgba(0, 0, 0, 0.333) 60%,
      rgba(0, 0, 0, 0.23) 66.67%,
      rgba(0, 0, 0, 0.15) 73.33%,
      rgba(0, 0, 0, 0.082) 80%,
      rgba(0, 0, 0, 0.035) 86.67%,
      rgba(0, 0, 0, 0.008) 93.33%,
      rgba(0, 0, 0, 0) 100%
    );
  }
  .listas {
    padding: 2.5rem 2.5rem;
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    .tendence {
      display: flex;
      flex-direction: column;
      padding: 1rem 0;
      .headerTendence {
        display: flex;
        padding: 0 0 1rem 0;
        justify-content: space-between;
        align-items: center;
        color: white;
        height: auto;
        h1 {
          margin: 0.4rem 0;
          font-size: 18px;
        }
      }
    }
  }
`;
