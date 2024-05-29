// src/components/ThemeToggle.js
import React from 'react';
import { useColorMode, Switch, HStack } from '@chakra-ui/react';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack position="fixed" top={4} right={4}>
      <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
    </HStack>
  );
};

export default ThemeToggle;
