import React from 'react';
import { render } from '@testing-library/react';

import JokeItem from '../../components/JokeItem';

describe('JokeItem Component', () => {
  it('should render a list of jokes', () => {
    const joke = { id: 'id', icon_url: 'url', value: 'value' };
    const { getByTestId } = render(<JokeItem joke={joke} />);

    expect(getByTestId('id')).toBeInTheDocument();
  });
});
