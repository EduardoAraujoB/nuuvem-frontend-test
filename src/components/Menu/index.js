import React from 'react';

import LogoSVG from '../../assets/logo.svg';
import LogoTextSVG from '../../assets/logo-text.svg';

import {
  Container,
  LogoContainer,
  Logo,
  LogoText,
  Title,
  SearchWrapper,
  SearchInput,
  SearchButton,
  SearchIcon,
} from './styles';

function Menu() {
  return (
    <Container>
      <LogoContainer href="/">
        <Logo src={LogoSVG} alt="logo" />
        <LogoText src={LogoTextSVG} alt="logo-text" />
      </LogoContainer>
      <Title>Chuck Norris Joke</Title>
      <SearchWrapper>
        <SearchInput placeholder="Search Jokes" />
        <SearchButton>
          <SearchIcon />
        </SearchButton>
      </SearchWrapper>
    </Container>
  );
}

export default Menu;
