import React from 'react';

import LogoSVG from '../../assets/logo.svg';
import LogoTextSVG from '../../assets/logo-text.svg';

import SearchBar from '../Search';

import { Container, LogoContainer, Logo, LogoText, Title } from './styles';

function Header() {
  return (
    <Container>
      <LogoContainer href="/">
        <Logo src={LogoSVG} alt="logo" />
        <LogoText src={LogoTextSVG} alt="logo-text" />
      </LogoContainer>
      <Title>Chuck Norris Joke</Title>
      <SearchBar />
    </Container>
  );
}

export default Header;
