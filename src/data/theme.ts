import {
	extendTheme,
	theme as defaultChakraTheme,
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { GlobalProps } from '@emotion/react';

export const theme = extendTheme({
	colors: {
		seagreen: {
			100: 'rgb(66,221,212)',
			200: 'rgb(44,217,208)',
			300: 'rgb(36,200,191)',
			400: 'rgb(32,178,170)', // lightseagreen
			500: 'rgb(28,156,149)',
			600: 'rgb(24,135,129)',
			700: 'rgb(20,113,108)',
			800: 'rgb(16, 91, 87)',
			900: 'rgb(12, 70, 67)',
		},
	},
	components: {
		Button: {
			baseStyle: {
				_focus: {
					boxShadow: `0 0 0 0.2rem rgb(32 178 170 / 50%)`,
				},
			},
			variants: {
				ghost: (props: any) => ({
					...defaultChakraTheme.components.Button.variants.ghost(
						props
					),
					_active: {
						bgColor: 'rgb(28 156 149 / 10%)',
						borderColor: 'seagreen.500',
						color: 'seagreen.500',
					},
					_hover: {
						bgColor: 'rgb(28 156 149 / 10%)',
						borderColor: 'seagreen.500',
						color: 'seagreen.500',
					},
					borderColor: 'seagreen.400',
					color: 'seagreen.400',
				}),
				outline: (props: any) => ({
					...defaultChakraTheme.components.Button.variants.outline(
						props
					),
					_active: {
						bgColor: 'rgb(28 156 149 / 10%)',
						borderColor: 'seagreen.500',
						color: 'seagreen.500',
					},
					_hover: {
						bgColor: 'rgb(28 156 149 / 10%)',
						borderColor: 'seagreen.500',
						color: 'seagreen.500',
					},
					borderColor: 'seagreen.400',
					color: 'seagreen.400',
				}),
				solid: (props: any) => ({
					...defaultChakraTheme.components.Button.variants.solid(
						props
					),
					_active: {
						bg: 'seagreen.500',
					},
					_hover: {
						bg: 'seagreen.500',
					},
					bg: 'seagreen.400',
					color: 'gray.50',
				}),
			},
		},
		Link: {
			baseStyle: {
				_focus: {
					boxShadow: 'none',
				},
				_hover: {
					textDecoration: `none`,
				},
			},
		},
	},
	styles: {
		globals: (props: GlobalProps) => ({
			body: {
				bg: mode('gray.50', 'gray.800')(props),
			},
			h1: {
				fontSize: '2em',
				fontWeight: 'bold !important',
			},
			h2: {
				fontSize: '1.5em',
				fontWeight: 'bold !important',
			},
			h3: {
				fontSize: '1.17em',
				fontWeight: 'bold !important',
			},
			h4: {
				fontWeight: 'bold !important',
			},
		}),
	},
});
