import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
`;

export const ContainerPoster = styled.div`
  width: 100%;
  height: 100%;
  .posterMain {
    width: auto;
    height: 100%;
    min-width: 170px;
    min-height: 260px;
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: 1rem;
    .poster {
      width: 100%;
      height: 100%;

      img {
        min-height: 143px;
        margin-bottom: 1rem;
        border-radius: 10px;
      }
      .hover {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0%);
        transition: all 0.5s ease-in-out;
        cursor: pointer;
        .icon {
          visibility: hidden;
          color: transparent;
          transition: all 0.3s ease-in-out;
          box-shadow: 0 0 10px transparent;
        }
      }
    }
    @media (max-width: 768px) {
      min-width: auto;
    }
  }
  .title {
    color: white;
    transition: all 0.5s ease;
    cursor: pointer;
  }
  :hover {
    .posterMain {
      .poster {
        .hover {
          background-color: rgba(0, 0, 0, 70%);
          .icon {
            visibility: visible;
            color: #fc0303;
            transform: scale(105%);
            box-shadow: 0 0 10px #fc0303;
          }
        }
      }
    }
    .title {
      color: #fc0303;
    }
  }
`;
