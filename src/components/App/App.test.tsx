import { render } from 'utils/testing';

import { App } from './App';

test('renders home page', () => {
	const { getByText } = render(<App />);
	const text = getByText(/home page/i);
	expect(text).toBeInTheDocument();
});
