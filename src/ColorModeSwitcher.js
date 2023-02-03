import React from 'react';
import { useDisclosure, useColorMode, useColorModeValue, IconButton, ScaleFade } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const { isOpen, onToggle } = useDisclosure()

  return (

    <IconButton
      pos={'fixed'}
      top={'4'}
      right={'4'}
      zIndex={1000}
      transition={'all 2 linear'}
      color="current"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};

export default ColorModeSwitcher;