import { useState } from 'react';
import { Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';

export const PasswordInput = () => {
  const [show, setShow] =   useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        required
        minLength={3}
        maxLength={30}
        name="password"
        pr="4.5rem"
        type={show ? 'text' : 'password'}
        placeholder="Enter password"
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};
