import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { searchRequest } from '../../store/modules/jokes/actions';

import Search from '../../components/Search';

jest.mock('react-redux', () => ({
  useSelector: jest.fn((fn) => fn()),
  useDispatch: () => jest.fn(),
}));
jest.mock('../../store/modules/jokes/actions');

describe('Search Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('sould be able to search', () => {
    const { getByTestId } = render(<Search />);

    fireEvent.change(getByTestId('search-input'), {
      target: { value: 'rass' },
    });
    fireEvent.click(getByTestId('search-button'));

    expect(searchRequest).toBeCalledTimes(1);
  });
});
