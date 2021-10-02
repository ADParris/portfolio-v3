import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

interface IComponentProps {}

export const Footer: React.FC<IComponentProps> = () => {
	return (
		<Flex
			alignItems="center"
			as="footer"
			h="3rem"
			justifyContent="space-between"
			mx="1rem"
		>
			<Text>Footer</Text>
		</Flex>
	);
};
