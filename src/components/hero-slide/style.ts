import styled from 'styled-components';

export const Hero = styled.div``;

export const Container = styled.div`
  padding: 9rem 0;
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: var(--color-background);
  box-shadow: inset 0px -31px 50px -9px #000000;
  > span img {
    opacity: 25%;
    object-fit: cover;
    animation: fadeIn 2s ease-in-out;
  }

  .hero_slide_item_content {
    opacity: 0;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    background-color: transparent;
    width: 60%;
    height: 60%;
    transition: all 2s ease;
    .hero_slide_item_info {
      transform: translateY(-100px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 100%;
      transition: all 1.5s ease;
      .title {
        color: #fff;
        font-size: 60px;
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
      .btns {
        display: flex;
        margin-top: 1rem;
        .BtnTrailer {
          width: 140px;
          margin-left: 1rem;
          display: flex;
          transition: all 0.3s ease-in-out;
          :hover {
            padding: 0 calc(100px - 45px) 0 0;
            button {
              color: #fff;
              background-color: #fc0303;
              border-color: #fc0303;
              box-shadow: 0 0 10px rgba(0, 0, 0, 70%);
              span {
                display: block;
              }
              h4 {
                display: none;
              }
            }
          }
          @media (max-width: 1024px) {
            width: 90px;
          }
        }
        @media (max-width: 1024px) {
          margin-top: 0;
        }
      }
    }
    .hero_slide_poster {
      width: 60%;
      height: 100%;
      position: relative;
      box-shadow: 0 0 20px rgba(0, 0, 0, 70%);
      border-radius: 15px;
      img {
        border-radius: 15px;
      }
      @media (max-width: 1024px) {
        width: 100%;
      }
    }
    @media (max-width: 1024px) {
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
      width: 60%;
      height: 90%;
    }
  }
  &.active {
    .hero_slide_item_content {
      opacity: 1;
      .hero_slide_item_info {
        transform: translateY(0);
      }
    }
  }
  @keyframes fadeIn {
    to {
      opacity: 25%;
    }
    from {
      opacity: 0%;
    }
  }
`;
