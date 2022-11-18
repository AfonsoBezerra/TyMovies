import styled from 'styled-components';

export const ContainerFaqStyle = styled.button`
  width: 100%;
  max-height: 3.5rem;
  display: flex;
  flex-direction: column;
  background-color: rgba(20, 7, 23);
  text-align: start;
  color: rgba(255, 255, 255, 0.8);
  overflow-y: hidden;
  transition: max-height 2s cubic-bezier(0, 1, 0, 1) 0s;
  .LineTitle {
    width: 100%;
    background-color: rgba(20, 7, 23);
    color: white;
    border-bottom: 1px solid rgba(255, 255, 255, 0.8);
    height: auto;
    padding: 1rem 1rem 0.5rem 0;
    white-space: nowrap;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    span {
      align-self: center;
      display: flex;
      height: 1.25rem;
      position: absolute;
      right: 0px;
      width: 1.25rem;
      top: 50%;
      transform: translateY(-50%);
      color: rgba(255, 255, 255, 0.8);
      hyphens: auto;
      ::before {
        background-color: rgba(255, 255, 255, 0.8);
        content: '';
        height: 100%;
        position: absolute;
        transition: transform 0.35s ease-out 0s;
        width: 0.1rem;
        transform: rotate(0deg);
      }
      ::after {
        transform: rotate(-90deg);
        background-color: rgba(255, 255, 255, 0.8);
        content: '';
        height: 100%;
        position: absolute;
        transition: transform 0.35s ease-out 0s;
        width: 0.1rem;
      }
    }
    .active {
      ::before {
        transform: rotate(90deg) !important;
      }
      ::after {
        transform: rotate(90deg) !important;
      }
    }
  }
  .res {
    padding: 1rem 1rem 0.5rem 0;
  }
  &.active {
    max-height: 99em;
    transition: max-height 2s ease-in-out 0s;
  }
`;
