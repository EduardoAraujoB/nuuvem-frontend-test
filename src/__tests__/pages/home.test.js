import React from 'react';
import { render, fireEvent } from '@testing-library/react';

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

  it('should go to the next page', () => {
    getJokes.mockReturnValue({
      jokes: [
        { id: 'id1', icon_url: 'some_url', value: 'value' },
        { id: 'id2', icon_url: 'some_url', value: 'value' },
        { id: 'id3', icon_url: 'some_url', value: 'value' },
        { id: 'id4', icon_url: 'some_url', value: 'value' },
        { id: 'id5', icon_url: 'some_url', value: 'value' },
        { id: 'id6', icon_url: 'some_url', value: 'value' },
      ],
    });

    const { getByTestId } = render(<Home />);

    fireEvent.click(getByTestId('next-page'));

    expect(getByTestId('joke-list')).toContainElement(getByTestId('id6'));
  });

  it('should go to the previous page', () => {
    getJokes.mockReturnValue({
      jokes: [
        { id: 'id1', icon_url: 'some_url', value: 'value' },
        { id: 'id2', icon_url: 'some_url', value: 'value' },
        { id: 'id3', icon_url: 'some_url', value: 'value' },
        { id: 'id4', icon_url: 'some_url', value: 'value' },
        { id: 'id5', icon_url: 'some_url', value: 'value' },
        { id: 'id6', icon_url: 'some_url', value: 'value' },
      ],
    });

    const { getByTestId } = render(<Home />);

    fireEvent.click(getByTestId('next-page'));
    fireEvent.click(getByTestId('previous-page'));

    expect(getByTestId('joke-list')).toContainElement(getByTestId('id1'));
  });
});
