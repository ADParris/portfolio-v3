import { render } from 'utils/testing';

import { Footer } from './Footer';

test('renders footer', () => {
	const { getByText } = render(<Footer />);
	const text = getByText(/footer/i);
	expect(text).toBeInTheDocument();
});
