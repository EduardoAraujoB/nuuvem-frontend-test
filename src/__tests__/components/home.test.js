import React from 'react';
import { render } from '@testing-library/react';

import { getJokes } from '../../store/modules/jokes/selectors';

import Home from '../../pages/Home';

jest.mock('react-redux', () => ({
  useSelector: jest.fn((fn) => fn()),
  useDispatch: () => jest.fn(),
}));
jest.mock('../../store/modules/jokes/selectors');

describe('Home Page', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render a component when jokes is null', () => {
    getJokes.mockReturnValue({ jokes: null });

    const { getByTestId } = render(<Home />);

    expect(getByTestId('home-container')).toContainElement(
      getByTestId('nothing-to-see')
    );
  });

  it('should render a component when jokes length is 0', () => {
    getJokes.mockReturnValue({ jokes: [] });

    const { getByTestId } = render(<Home />);

    expect(getByTestId('home-container')).toContainElement(
      getByTestId('search-not-found')
    );
  });

  it('should render a list of jokes', () => {
    getJokes.mockReturnValue({
      jokes: [{ id: 'id', icon_url: 'some_url', value: 'value' }],
    });

    const { getByTestId } = render(<Home />);

    expect(getByTestId('jokes-container')).toContainElement(
      getByTestId('joke-list')
    );
  });
});
