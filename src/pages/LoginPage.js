// src/pages/LoginPage.js
import React from 'react';
import { Box, Button, Input, VStack, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = () => {
    // Dummy authentication
    localStorage.setItem('authenticated', 'true');
    toast({
      title: 'Login successful.',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
    navigate('/sale-orders');
  };

  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center">
      <VStack spacing={4}>
        <Input placeholder="Username" />
        <Input placeholder="Password" type="password" />
        <Button onClick={handleLogin}>Login</Button>
      </VStack>
    </Box>
  );
};

export default LoginPage;
