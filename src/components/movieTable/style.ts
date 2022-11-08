import styled from 'styled-components';

export const MovieTableStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  position: relative;
  background-image: linear-gradient(
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
  z-index: 999;
  .transition {
    width: 100vw;
    height: 135px;
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
  @media (max-width: 1024px) {
    padding: 1rem 0.5rem;
  }
`;
