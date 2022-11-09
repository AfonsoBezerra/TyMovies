import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 95vh;
  background-color: aqua;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: var(--color-background);
  box-shadow: inset 0px -31px 50px -9px #000000;
  > span img {
    opacity: 15%;
    object-fit: cover;
  }

  .hero_slide_item_content {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    background-color: transparent;
    width: 60%;
    height: 60%;
    animation: animationFade 1.5s;
    .hero_slide_item_info {
      display: flex;
      margin-top: 30px;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 100%;
      transition: all 1.5s ease;
      .title {
        color: #fff;
        font-size: 40px;
        font-weight: bold;
        @media (max-width: 1024px) {
          font-size: 22px;
        }
      }
      .overview {
        padding: 1rem 0 0 0;
        width: 100%;
        color: #fff;
        font-size: 16px;
        @media (max-width: 1024px) {
          font-size: 13px;
        }
      }
      .credits {
        margin-top: 1.5rem;
        max-width: 680px;
        height: auto;
        background-color: transparent;
        color: white;
        display: flex;
        position: relative;
        .img {
          display: flex;
          flex-direction: column;
          img {
            width: 100%;
            max-height: 300px;
            border-radius: 15px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 80%);
          }
          span {
            margin-top: 0.5rem;
          }
        }
        @media (min-width: 1024px) {
          margin-top: 1.5rem;
          max-width: 450px;
        }
        @media (min-width: 1440px) {
          max-width: 600px;
        }
      }
    }
    .hero_slide_poster {
      width: 70%;
      height: 100%;
      position: relative;
      box-shadow: 0 0 20px rgba(0, 0, 0, 70%);
      border-radius: 15px;
      img {
        border-radius: 15px;
      }
      @media (max-width: 1020px) {
        width: 80%;
      }
      @media (max-width: 767px) {
        display: none;
      }
    }
    @media (max-width: 1020px) {
      flex-direction: column;
      .hero_slide_item_info {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .hero_slide_poster {
        transform: translateY(0);
      }
      gap: 2rem;
      height: 90%;
    }

    @media (max-width: 700px) {
      width: 90%;
    }
    @media (min-width: 1024px) {
      width: 90%;
    }
  }

  @keyframes animationFade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes animationTranslate {
    from {
      transform: translateY(-100px);
    }
    to {
      transform: translateY(0);
    }
  }
  @media (max-width: 600px) {
    height: 130vh;
  }
`;
