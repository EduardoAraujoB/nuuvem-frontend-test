import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 10px;
  background: #263241;
  color: #fff;
  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.5);
`;

export const LogoContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  height: 50px;
`;

export const LogoText = styled.img`
  width: 120px;
  margin-left: 3px;
  @media only screen and (max-width: 760px) {
    display: none;
  }
`;

export const Title = styled.h2`
  color: #fff;
  @media only screen and (max-width: 760px) {
    display: none;
  }
`;
