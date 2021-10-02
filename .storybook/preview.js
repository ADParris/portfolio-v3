import { themes } from '@storybook/theming';
import { theme as chakraTheme } from 'data/theme';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	chakra: { theme: chakraTheme },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	docs: {
		theme: themes.normal,
	},
};
