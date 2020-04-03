import React from 'react';
import { render } from '@testing-library/react';

import SearchNotFound from '../../components/SearchNotFound';

describe('SearchNotFound Component', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(<SearchNotFound />);

    expect(getByTestId('search-not-found')).toBeInTheDocument();
  });
});
