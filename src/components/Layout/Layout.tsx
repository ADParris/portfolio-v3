import { Flex } from '@chakra-ui/react';
import React from 'react';

import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';

interface IComponentProps {}

export const Layout: React.FC<IComponentProps> = ({ children }) => {
	return (
		<Flex flexDir="column" minH="100vh">
			<Header />
			<Main>{children}</Main>
			<Footer />
		</Flex>
	);
};
