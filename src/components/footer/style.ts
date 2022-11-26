import styled from 'styled-components';

export const Container = styled.footer`
  width: 100vw;
  height: auto;
  background-color: #111111;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;
  color: #fff;
  position: relative;
  padding: 2rem 1rem 1rem 1rem;
  .bordaColor {
    width: 40%;
    height: 10px;
    background: linear-gradient(
        345deg,
        rgb(73, 12, 176) 0%,
        rgb(155, 52, 239) 33%,
        rgba(255, 255, 255, 0) 66%,
        rgba(255, 255, 255, 0) 100%
      )
      99% 50% / 400% 400%;
    position: absolute;
    border: 1px solid black;
    top: 0;
    right: 0;
  }
  .contacts {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .title {
      h5 {
        text-transform: uppercase;
        font-size: 13px;
        color: white;
      }
      .borderColorTitle {
        width: 40px;
        height: 3px;
        background: linear-gradient(
            345deg,
            rgb(73, 12, 176) 0%,
            rgb(155, 52, 239) 33%,
            rgba(255, 255, 255, 0) 66%,
            rgba(255, 255, 255, 0) 100%
          )
          99% 50% / 400% 400%;
        transform: translateY(-50%);
      }
    }
    .icons {
      display: flex;
      gap: 1rem;
    }
  }
  .direitos {
    width: 100%;
    gap: 0.5rem;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    .divider {
      width: 100%;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.2);
    }
    span {
      font-size: 10px;
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;
