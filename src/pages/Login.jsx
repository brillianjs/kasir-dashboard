import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <Box
      maxW="md"
      mx="auto"
      mt={20}
      p={6}
      bg="white"
      boxShadow="md"
      borderRadius="md"
    >
      <Heading mb={6}>Login Dashboard</Heading>
      <FormControl id="email" mb={4}>
        <FormLabel>Email address</FormLabel>
        <Input type="email" value={email} onChange={handleEmailChange} />
      </FormControl>
      <FormControl id="password" mb={6}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </FormControl>
      <Stack direction="row" justify="space-between" mb={4}>
        <Link color="teal.500">Forgot password?</Link>
        <Link color="teal.500">Create an account</Link>
      </Stack>
      <Button colorScheme="teal" w={"full"} onClick={handleLogin}>
        Login
      </Button>
      <Text mt={4} textAlign="center">
        Don't have an account? <Link color="teal.500">Create one</Link>
      </Text>
    </Box>
  );
};

export default LoginPage;
