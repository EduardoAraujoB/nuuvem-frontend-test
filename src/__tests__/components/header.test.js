import React from 'react';
import { render } from '@testing-library/react';

import Header from '../../components/Header';

jest.mock('react-redux', () => ({
  useSelector: jest.fn((fn) => fn()),
  useDispatch: () => jest.fn(),
}));

describe('Header Component', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(<Header />);

    expect(getByTestId('header')).toBeInTheDocument();
  });
});
