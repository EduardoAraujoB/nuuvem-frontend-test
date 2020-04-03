import React from 'react';
import { render } from '@testing-library/react';

import NothingToSee from '../../components/NothingToSee';

describe('NothingToSee Component', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(<NothingToSee />);

    expect(getByTestId('nothing-to-see')).toBeInTheDocument();
  });
});
