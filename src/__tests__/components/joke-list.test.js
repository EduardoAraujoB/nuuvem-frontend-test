import React from 'react';
import { render } from '@testing-library/react';

import JokeList from '../../components/JokeList';

describe('JokeList Component', () => {
  it('should render a list of jokes', () => {
    const jokes = [
      { id: 'id1', icon_url: 'url', value: 'value' },
      { id: 'id2', icon_url: 'url', value: 'value' },
    ];
    const { getByTestId } = render(<JokeList jokes={jokes} />);

    expect(getByTestId('joke-list')).toContainElement(getByTestId('id2'));
  });
});
