import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

import { Layout } from 'components/Layout';
import { HomePage } from 'pages';

export const App: React.FC = () => (
	<ChakraProvider theme={theme}>
		<Layout>
			<HomePage />
		</Layout>
	</ChakraProvider>
);
