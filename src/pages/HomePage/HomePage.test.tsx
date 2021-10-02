import React from 'react';

import { render } from 'utils/testing';

import { HomePage } from './HomePage';

test('renders home page', () => {
	const { getByText } = render(<HomePage />);
	const text = getByText(/home page/i);
	expect(text).toBeInTheDocument();
});
