import {
	Button,
	Icon,
	IconButton,
	Text,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

interface IComponentProps {
	/**
	 * Controls 'onClose' for Chakra menu components.
	 */
	handleClose?: () => void;
	/**
	 * Include the label in the button?
	 */
	label?: boolean;
	/**
	 * How large should the button be?
	 */
	size?: '1rem' | '1.17rem' | '1.25rem';
	/**
	 * Button look?
	 */
	variant?: 'ghost' | 'outline' | 'solid';
}

export const ColorModeSwitcher: React.FC<IComponentProps> = ({
	handleClose,
	label,
	size = '1.17rem',
	variant = 'outline',
}) => {
	const { toggleColorMode } = useColorMode();
	const text = useColorModeValue('dark', 'light');
	const SwitchIcon = useColorModeValue(FaMoon, FaSun);

	const handleToggleAndClose = () => {
		toggleColorMode();
		handleClose && handleClose();
	};

	return label ? (
		<Button
			alignItems="center"
			aria-label={`switch to ${text} mode`}
			h={`calc(${size} * 2)`}
			leftIcon={
				<Icon as={SwitchIcon} boxSize={`calc(${size} * 0.9)`} />
			}
			maxH={`calc(${size} * 2)`}
			minW="auto"
			onClick={handleToggleAndClose}
			px={`calc(${size} * 0.75)`}
			py={`calc(${size} * 0.75)`}
			variant={variant ? variant : 'outline'}
		>
			<Text
				fontSize={size}
				fontWeight="normal"
				lineHeight={`calc(${size} * 0.9)`}
				pb={`calc(${size} * 0.09)`}
				textTransform="capitalize"
			>{`${text} mode`}</Text>
		</Button>
	) : (
		<IconButton
			aria-label={`switch to ${text} mode`}
			h={`calc(${size} * 2)`}
			icon={<Icon as={SwitchIcon} boxSize={size} />}
			minW="auto"
			onClick={toggleColorMode}
			variant={variant ? variant : 'outline'}
			w={`calc(${size} * 2)`}
		/>
	);
};
