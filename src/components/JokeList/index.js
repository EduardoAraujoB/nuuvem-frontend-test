import React from 'react';

import { Container } from './styles';
import JokeItem from '../JokeItem';

function JokeList({ jokes }) {
  return (
    <Container data-testid="joke-list">
      {jokes.map((joke) => (
        <JokeItem key={joke.id} joke={joke} />
      ))}
    </Container>
  );
}

export default JokeList;
