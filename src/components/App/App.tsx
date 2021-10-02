import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from 'data/theme';

import { Layout } from 'components/Layout';
import { HomePage } from 'pages';

export const App: React.FC = () => (
	<ChakraProvider theme={theme}>
		<Layout>
			<HomePage />
		</Layout>
	</ChakraProvider>
);
