import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
`;

export const ContainerPoster = styled.a`
  width: 100%;
  height: 100%;
  .posterMain {
    width: auto;
    height: 100%;
    min-width: 170px;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: 1rem;
    .poster {
      width: 100%;
      height: 100%;

      img {
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
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        .icon {
          border-radius: 50%;
          visibility: hidden;
          color: transparent;
          transition: all 0.5s ease-in-out;
          box-shadow: 0 0 5px transparent;
        }
      }
    }
    @media (max-width: 768px) {
      max-width: 100%;
      min-height: 300px;
      height: 100%;
    }
  }
  .title {
    color: white;
    transition: all 0.5s ease;
    cursor: pointer;
  }
  @media (min-width: 1024px) {
    :hover {
      .posterMain {
        .poster {
          .hover {
            background-color: rgba(0, 0, 0, 70%);
            .icon {
              border-radius: 50%;
              visibility: visible;
              color: #fc0303;
              transform: scale(180%);
              box-shadow: 0 0 5px #fc0303;
            }
          }
        }
      }
      .title {
        color: #fc0303;
      }
    }
  }
`;
