import styled from 'styled-components';

export const Modal = styled.div`
  width: 90vw;
  height: 750px;
  background-color: rgba(25, 25, 25, 0.99);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding: 1rem;
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
    justify-content: end;
    align-items: center;
    button {
      color: white;
    }
  }
  .modalBody {
    overflow-y: auto;
    overflow-x: none;
    width: 100%;
    margin-top: 0.5rem;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    .svg {
      width: 100%;
      height: 200px;
      svg {
        width: 100%;
        height: 100%;
      }
    }
    form {
      margin-top: 1rem;
      width: 100%;
      display: grid;
      flex-wrap: wrap;
      label {
        display: flex;
        flex-direction: column;
        select {
          margin: 0.5rem;
          min-width: 20%;
        }
      }
    }
  }
`;
