import React from 'react';

import { Container, JokeImg, JokeText } from './styles';

function JokeItem({ joke }) {
  return (
    <Container data-testid={joke.id}>
      <JokeImg width="60" height="60" src={joke.icon_url} />
      <JokeText>{joke.value}</JokeText>
    </Container>
  );
}

export default JokeItem;
