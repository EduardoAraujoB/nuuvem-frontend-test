import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';
import JokeList from '../../components/JokeList';

import { Container } from './styles';

function Home() {
  const { jokes } = useSelector((state) => state.jokes);
  return (
    <>
      <Header />
      <Container>
        <JokeList jokes={jokes} />
      </Container>
    </>
  );
}

export default Home;
