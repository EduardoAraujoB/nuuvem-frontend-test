import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

export const Container = styled.div`
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
`;

export const Title = styled.h2`
  color: #fff;
`;

export const SearchWrapper = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 2px;
  border-color: #435467;
  background: #435467;
  color: #fff;
  padding-left: 18px;
  padding-right: 60px;
  color: rgba(255, 255, 255, 0.5);
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  border: 0;
  background: 0 0;
`;

export const SearchIcon = styled(FiSearch)`
  width: 25px;
  height: 25px;
  margin-right: 5px;
  color: rgba(255, 255, 255, 0.5);
`;
