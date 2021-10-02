import { Flex } from '@chakra-ui/react';
import React from 'react';

interface IComponentProps {}

export const Main: React.FC<IComponentProps> = ({ children }) => {
	return (
		<Flex as="main" flex={1}>
			{children}
		</Flex>
	);
};
