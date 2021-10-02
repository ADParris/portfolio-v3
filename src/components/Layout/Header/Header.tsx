import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

interface IComponentProps {}

export const Header: React.FC<IComponentProps> = () => {
	return (
		<Flex
			alignItems="center"
			as="header"
			h="4rem"
			justifyContent="space-between"
			mx="1rem"
		>
			<Text>Header</Text>
		</Flex>
	);
};
