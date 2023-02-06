import { Form } from './login.styled';
import { Input, Button } from '@chakra-ui/react';

import { PasswordInput } from './PasswordInput';

import { logIn } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

export const LogIn = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;


    dispatch(logIn({ email, password }));

    form.reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input name="email" placeholder="email" />
        <PasswordInput />
        <Button type="submit" colorScheme="green">
          Log in
        </Button>
      </Form>
    </>
  );
};
