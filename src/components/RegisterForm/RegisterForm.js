import { Form } from './RegisterForm.styled';
import { Input, Button, FormLabel } from '@chakra-ui/react';
import { PasswordInput } from './PasswordInput';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const passwordTwo = form.elements.passwordTwo.value;

    if (password === passwordTwo) {
      dispatch(register({ name, email, password }));

      form.reset();
    } else {
      return alert(`Passwords don't sing`);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormLabel>log in</FormLabel>
        <Input name="name" type="text" placeholder="log in" />
        <FormLabel>email</FormLabel>
        <Input name="email" type="email" placeholder="email" />
        <FormLabel>password</FormLabel>
        <PasswordInput name={'password'} />
        <FormLabel>password</FormLabel>
        <PasswordInput name={'passwordTwo'} />
        <Button type="submit" colorScheme="green">
          Log in
        </Button>
      </Form>
    </>
  );
};
