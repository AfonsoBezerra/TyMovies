import styled from 'styled-components';

export const Logo = styled.a`
  width: 46px;
  height: 53px;
  position: absolute;
  transform: rotate(0);
  transition: all 0.5s ease-in-out;
  :hover {
    transform: rotate(360deg);
  }
  @media (max-width: 1024px) {
    width: 55px;
    height: 63px;
  }
`;
