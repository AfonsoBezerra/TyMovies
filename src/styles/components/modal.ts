import styled from 'styled-components';

export const Modal = styled.div`
  width: 90vw;
  height: 90vh;
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translate(-50%);
  z-index: 9999;
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .modalHeader {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: start;
    button {
      color: white;
    }
    .title {
      width: 100%;
      display: flex;
      justify-content: center;
      @media (max-width: 767px) {
        h1 {
          font-size: 20px !important;
        }
      }
    }
  }
  .modalBody {
    ::-webkit-scrollbar {
      width: 2px; /* width of the entire scrollbar */
    }

    ::-webkit-scrollbar-track {
      background: transparent; /* color of the tracking area */
    }

    ::-webkit-scrollbar-thumb {
      background-color: grey; /* color of the scroll thumb */
      border-radius: 20px; /* roundness of the scroll thumb */
    }
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
    row-gap: 2rem;
    .svg {
      width: auto;
      height: auto;
      background-color: rgba(44, 44, 44, 0.6);
      border: 1px solid white;
      border-radius: 50%;
      margin: auto;
      svg {
        cursor: pointer;
        width: 140px;
        height: 140px;
      }
    }
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 1300px) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
    @media (min-width: 1900px) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    }
  }
  @media (min-width: 1300px) {
    top: 50%;
    height: 95vh;
    transform: translate(-50%, -50%);
    padding: 2rem 1rem;
    .modalBody {
      height: 100%;
      align-items: center;
    }
  }
`;
