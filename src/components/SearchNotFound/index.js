import React from 'react';

import { Container, ErrorIcon, Title } from './styles';

export default function SearchNotFound() {
  return (
    <Container data-testid="search-not-found">
      <ErrorIcon />
      <Title>Search not found, try other keyword</Title>
    </Container>
  );
}
