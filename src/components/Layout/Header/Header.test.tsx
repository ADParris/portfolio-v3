import { render } from 'utils/testing';

import { Header } from './Header';

test('renders header', () => {
	const { getByText } = render(<Header />);
	const text = getByText(/header/i);
	expect(text).toBeInTheDocument();
});
