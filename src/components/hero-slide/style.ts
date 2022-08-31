import styled from 'styled-components';

export const Hero = styled.div``;

export const Container = styled.div`
  padding: 9rem 0;
  width: 100%;
  height: 85vh;
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
  .active {
    img {
      transform: scale(1);
    }
  }
  .hero_slide_item_content {
    position: absolute;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    background-color: transparent;
    width: 50%;
    height: 60%;

    .hero_slide_item_info {
      width: 100%;
      height: 100%;
      .title {
        color: #fff;
        font-size: 30px;
      }
      .overview {
        padding: 1rem 0 0 0;
        width: 100%;
        color: #fff;
        font-size: 12px;
      }
      .btns {
        display: flex;
        .BtnTrailer {
          width: 88px;
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
        }
      }
    }
    .hero_slide_poster {
      width: 100%;
      height: 100%;
      position: relative;
      box-shadow: 0 0 20px rgba(0, 0, 0, 70%);
      border-radius: 15px;
      transform: translateY(-10%);
      img {
        border-radius: 15px;
      }
    }
    @media (max-width: 1024px) {
      flex-direction: column;
      .hero_slide_poster {
        transform: translateY(0);
      }

      width: 60%;
      height: 70%;
    }
  }
`;
