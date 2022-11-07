import styled from 'styled-components';

export const ContainerTable = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  color: white;
  @media (max-width: 1024px) {
    width: 100%;
  }
  .Header {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    .title {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: start;
      align-items: center;
      flex-wrap: nowrap;
      h1 {
        width: auto;
        padding: 0;
        margin: 0;
        white-space: nowrap;
        font-size: 15px;
        margin: 0 0.5rem;
        letter-spacing: 1px;
        font-weight: bold;
        filter: drop-shadow(0 0 1px rgba(252, 3, 3, 0.4));
        @media (min-width: 1024px) {
          font-size: 20px;
          margin: 0 0.5rem;
        }
      }
      span {
        width: 10%;
        height: 1px;
        background-color: #fc0303;
        margin: 0 1rem;
        box-shadow: 0 0 10px #fc0303;
        border-radius: 2px;
        @media (max-width: 1024px) {
          width: 10%;
          margin: 0rem;
        }
      }
    }
    .inputIcon {
      width: 20%;
      display: flex;
      align-items: center;
      position: relative;
      input {
        width: 100%;
        background-color: transparent;
        border-radius: 7px;
        border: 1px solid rgba(255, 255, 255, 0.7);
        font-size: 14px;
        color: white;
        outline: none;
        padding: 0.3rem 0.5rem;
      }
      > button {
        position: absolute;
        right: 0.4rem;
      }
    }
    @media (max-width: 1024px) {
      .inputIcon {
        width: 70%;
      }
    }
  }

  .allPosters {
    width: 100%;
    height: 100%;
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    .posters {
      width: 100%;
      height: 100%;
      .posterMain {
        min-height: 250px;
        max-height: 266px;
      }
    }
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
      .posters {
        .posterMain {
          min-height: 300px;
        }
      }
    }
    @media (min-width: 1024px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      margin-top: 2rem;
      gap: 1rem;
      .posters {
        .posterMain {
          min-height: 300px;
        }
      }
    }
    @media (min-width: 1440px) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      .posters {
        .posterMain {
          min-height: 350px;
        }
      }
    }
    @media (min-width: 1920px) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      gap: 1.5rem;
      .posters {
        .posterMain {
          min-height: 400px;
        }
      }
    }
    @media (min-width: 2000px) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      gap: 1.5rem;
      .posters {
        .posterMain {
          min-height: 450px;
        }
      }
    }
  }
`;
