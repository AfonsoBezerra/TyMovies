import styled from 'styled-components';

export const ContainerIndex = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  position: relative;
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
        font-weight: bolder;
        letter-spacing: 1px;
      }
      .line {
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
      .subs {
        margin-top: 1rem;
        font-size: 18px;
        color: rgba(255, 255, 255, 0.8);
        margin-bottom: 0.5rem;
      }
      button {
        margin-top: 1rem;
        padding: 0.4rem 2.7rem;
        border-radius: 20px;
        background: linear-gradient(
            345deg,
            rgb(73, 12, 176) 0%,
            rgb(155, 52, 239) 33%,
            rgba(255, 255, 255, 0) 66%,
            rgba(255, 255, 255, 0) 100%
          )
          99% 50% / 400% 400%;
        color: white;
        font-size: 15px;
        font-weight: bold;
        text-transform: uppercase;
        transition: all 0.5s;
        :hover {
          background: white;
          color: #140717;
        }
      }
    }
    .transition {
      width: 100vw;
      height: 2400px;
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
    @media (max-width: 600px) {
      padding-top: 60px;
    }
  }
  .content {
    width: 100%;
    height: auto;
    background-color: rgba(20, 7, 23);
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 2rem;
    .mainMovies {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow-x: hidden;
      gap: 1.5rem;
      width: 100%;
      h2 {
        width: 100%;
        text-align: center;
        color: rgba(255, 255, 255, 0.8);
        font-size: 20px;
        line-height: 30px;
        @media (min-width: 1024px) {
          font-size: 24px;
        }
      }
      .carrossel {
        width: 100%;
        height: auto;
        .element {
          width: 100%;
          height: 280px;
          user-select: none;
          position: relative;
          border: 1px solid #7434d1;
          img {
            width: 100%;
            height: 100%;
            cursor: pointer;
          }
          @media (min-width: 760px) {
            height: 350px;
          }
          @media (min-width: 1300px) {
            height: 300px;
          }
          @media (min-width: 1440px) {
            height: 400px;
          }
        }
        @media (min-width: 1024px) {
          width: 70%;
        }
        @media (min-width: 1300px) {
          width: 60%;
        }
        @media (min-width: 1440px) {
          width: 80%;
        }
        @media (min-width: 1700px) {
          width: 60%;
        }
        @media (min-width: 2060px) {
          width: 50%;
        }
      }
      button {
        margin-top: 1rem;
        padding: 0.2rem 1.5rem;
        border-radius: 20px;
        background: rgb(248, 249, 250);
        color: rgb(3, 3, 40);
        font-size: 15px;
        font-weight: bold;
        text-transform: uppercase;
        transition: all 0.5s;
        border: 2px solid transparent;
        :hover {
          background-color: transparent;
          color: rgb(255, 255, 255);
          border-color: rgb(255, 255, 255);
        }
      }
    }
    .personagens {
      width: 100%;
      padding: 0 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5rem;
      height: auto;
      overflow-x: hidden;
      .img {
        width: auto;
        height: auto;
        text-align: center;
        img {
          width: 100%;
          height: 100%;
          margin-bottom: 1rem;
        }
        h2 {
          color: rgba(255, 255, 255, 0.8);
          font-size: 18px;
          span {
            font-weight: bold;
          }
        }
        @media (min-width: 1024px) {
          width: 500px;
        }
        @media (min-width: 1440px) {
          width: 400px;
        }
      }
      @media (min-width: 1024px) {
        .wood {
          width: 600px;
        }
      }
      @media (min-width: 1440px) {
        .wood {
          width: 500px;
        }
      }
      @media (min-width: 1024px) {
        align-items: end;
        flex-direction: row;
        justify-content: space-evenly;
      }
    }
    .telas {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      height: auto;
      overflow-x: hidden;
      background-image: linear-gradient(
        to bottom,
        #140717,
        #18091b,
        #1c0b1f,
        #1f0d24,
        #230e28,
        #230e28,
        #230e28,
        #230e28,
        #1f0d24,
        #1c0b1f,
        #18091b,
        #140717
      );
      .title {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        gap: 1rem;
        h1 {
          padding: 0 20px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 32px !important;
          line-height: 38px;
          margin-top: 3rem;
        }
        p {
          color: rgba(255, 255, 255, 0.8);
          font-weight: 400;
          font-size: 18px;
          line-height: 24px;
          padding: 0 5px;
        }
      }
      .image {
        width: 100%;
        height: 200px;
        display: flex;
        justify-content: center;
        .img {
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
        @media (min-width: 700px) {
          height: 300px;
          padding: 0 20px;
        }
        @media (min-width: 1000px) {
          height: 400px;
          padding: 0 100px;
        }
        @media (min-width: 1300px) {
          padding: 0 250px;
        }
        @media (min-width: 1700px) {
          padding: 0 500px;
        }
        @media (min-width: 2000px) {
          padding: 0 650px;
        }
      }
    }
    .descubra {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 2rem;
      gap: 1rem;
      .title {
        p {
          color: rgba(255, 255, 255, 0.8);
          font-weight: 400;
          font-size: 20px;
          line-height: 24px;
          padding: 0 5px;
        }
      }
      .carrosel {
        padding: 1rem 2rem;
        width: 100%;
        height: auto;
        .element {
          width: 100%;
          height: 280px;
          position: relative;
          border-radius: 10px;
          img {
            position: absolute;
            width: 100%;
            height: 100%;
            cursor: pointer;
            transition: all 1s;
            border-radius: 10px;
          }
          .noActive {
            opacity: 0;
          }
          .active {
            opacity: 1 !important;
            border: 1px solid #7434d1;
          }
          @media (min-width: 760px) {
            height: 350px;
          }
          @media (min-width: 1300px) {
            height: 400px;
          }
        }
        @media (min-width: 768px) {
          display: none;
        }
      }
      .grid {
        width: 100%;
        height: 800px;
        display: grid;
        padding: 0 2rem 2rem 2rem;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 50% 50%;
        gap: 2rem;
        .element {
          width: 100%;
          height: 100%;
          border-radius: 10px;
          background-color: white;
          img {
            width: 100%;
            height: 100%;
            cursor: pointer;
            border-radius: 10px;
            border: 1px solid #7434d1;
          }
        }
        @media (max-width: 767px) {
          display: none;
        }
        @media (min-width: 1280px) {
          width: 80%;
        }
        @media (min-width: 1440px) {
          width: 70%;
        }
        @media (min-width: 1700px) {
          width: 60%;
        }
        @media (min-width: 1900px) {
          width: 50%;
        }
      }
      button {
        margin-top: 1rem;
        padding: 0.4rem 2.7rem;
        border-radius: 20px;
        background: linear-gradient(
            345deg,
            rgb(73, 12, 176) 0%,
            rgb(155, 52, 239) 33%,
            rgba(255, 255, 255, 0) 66%,
            rgba(255, 255, 255, 0) 100%
          )
          99% 50% / 400% 400%;
        color: white;
        font-size: 15px;
        font-weight: bold;
        text-transform: uppercase;
        transition: all 0.5s;
        :hover {
          background: white;
          color: #140717;
        }
      }
    }
    .containerFaqs {
      width: 100%;
      padding: 2rem 1rem;
      height: auto;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      h2 {
        text-align: center;
        color: rgba(255, 255, 255, 0.8);
        font-size: 22px;
      }
      .allFaqs {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      @media (min-width: 1024px) {
        width: 80%;
      }
      @media (min-width: 1440px) {
        width: 70%;
      }
      @media (min-width: 1700px) {
        width: 60%;
      }
      @media (min-width: 1900px) {
        width: 50%;
      }
    }
    @media (min-width: 1024px) {
      gap: 5rem;
    }
  }
`;
