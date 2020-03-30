import React, { useState, useEffect } from 'react';

import Menu from '../../components/Menu';
import api from '../../services/api';

import { Container, Title, JokeContainer } from './styles';

function Home() {
  const [joke, setJoke] = useState({});

  useEffect(() => {
    async function loadChucks() {
      const response = await api.get('/jokes/random');
      setJoke(response.data);
    }
    loadChucks();
  }, []);

  return (
    <>
      <Menu />
      <Container>
        <Title>Random Joke</Title>
        <JokeContainer>
          <div>
            <img alt="joke" src={joke.icon_url} />
            <span>{joke.value}</span>
          </div>
          <div>
            <img alt="joke" src={joke.icon_url} />
            <span>{joke.value}</span>
          </div>
          <div>
            <img alt="joke" src={joke.icon_url} />
            <span>{joke.value}</span>
          </div>
          <div>
            <img alt="joke" src={joke.icon_url} />
            <span>{joke.value}</span>
          </div>
          <div>
            <img alt="joke" src={joke.icon_url} />
            <span>{joke.value}</span>
          </div>
          <div>
            <img alt="joke" src={joke.icon_url} />
            <span>{joke.value}</span>
          </div>
        </JokeContainer>
      </Container>
    </>
  );
}

export default Home;
