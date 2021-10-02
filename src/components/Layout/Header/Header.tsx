import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

import { ColorModeSwitcher } from 'components/Buttons';

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
			<ColorModeSwitcher />
		</Flex>
	);
};
