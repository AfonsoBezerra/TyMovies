import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  .hero {
    position: relative;
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: start;
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
    box-shadow: inset 0px -31px 50px -9px #000000;
    > span img {
      opacity: 30%;
      object-fit: cover;
    }
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

    .hero-detail {
      width: 90%;
      height: auto;
      color: white;
      display: flex;
      flex-direction: column;
      padding: 0 2rem;
      z-index: 999;
      h1 {
        font-size: 25px;
        font-weight: bold;
      }
      .buttons {
        width: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        padding: 1rem 0;
        .starIcons {
          width: 120px;
          height: 50px;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          h3 {
            font-size: 22px;
            margin: 0;
            padding: 0;
          }
          span {
            font-size: 15px;
          }
        }
      }
      @media (min-width: 1024px) {
        align-items: start;
        .buttons {
          justify-content: start;
        }
      }
      @media (min-width: 1444px) {
        align-items: start;
      }
    }

    .transition {
      width: 100vw;
      height: 700px;
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
  }
  .informations {
    position: relative;
    z-index: 999;
    height: auto;
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
    .transitionInformations {
      width: 100vw;
      height: 180px;
      position: absolute;
      top: 0;
      z-index: -1;
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
    .Texts {
      width: 100%;
      color: rgba(255, 255, 255, 0.7);
      padding: 0 2rem;
      span {
        font-size: 14px;
      }
      @media (min-width: 1024px) {
        max-width: 70%;
        span {
          font-size: 15px;
        }
      }
      @media (min-width: 1444px) {
        max-width: 60%;
        span {
          font-size: 17px;
        }
      }
    }
    .Actors {
      width: 100%;
      padding: 2rem;
      height: auto;
      .title {
        display: flex;
        align-items: center;
        height: 30px;
        margin-bottom: 1rem;
        h2 {
          font-size: 20px;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          padding: 0;
          @media (max-width: 767px) {
            font-size: 15px;
          }
        }
      }
      .swiper {
        width: 100%;
        height: 100%;
      }

      .swiper-slide {
        text-align: center;
        font-size: 18px;
        min-height: 224px;
        background: rgba(255, 255, 255, 0.1);
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        -webkit-justify-content: start;
        justify-content: start;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        padding: 0.5rem;
        border-radius: 5px;
        .img {
          width: 100%;
          height: 150px;
          border-radius: 5px;
          span {
            width: 100% !important;
            height: 100% !important;
            border-radius: 5px;
            object-fit: cover !important;
            position: inherit !important;
            img {
              position: inherit !important;
            }
          }
          @media (min-width: 768px) {
            height: 250px;
          }
          @media (min-width: 1024px) {
            height: 350px;
          }
        }
        .namemovie {
          font-size: 14px;
          color: white;
        }
      }
    }
  }
`;
