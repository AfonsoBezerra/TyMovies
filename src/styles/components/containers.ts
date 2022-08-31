import styled from 'styled-components';

export const Container = styled.section`
  margin: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  .tendence {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    .headerTendence {
      display: flex;
      padding: 0 0 1rem 0;
      justify-content: space-between;
      align-items: center;
      color: white;
      height: auto;
      h1 {
        margin: 0.4rem 0;
        font-size: 18px;
      }
    }
  }
`;
