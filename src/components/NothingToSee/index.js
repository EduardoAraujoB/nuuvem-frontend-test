import React from 'react';

import { Container, Icon, Title } from './styles';

function NothingToSee() {
  return (
    <Container data-testid="nothing-to-see">
      <Icon />
      <Title>Nothing to see, search something</Title>
    </Container>
  );
}

export default NothingToSee;
