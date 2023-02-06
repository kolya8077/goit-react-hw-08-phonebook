import { Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from 'redux/auth/auth-selectors';
import { Block, Title } from './userMenu.styled';
import { logOut } from 'redux/auth/auth-operations';

export const UserMenu = () => {
  const dispatch = useDispatch()
  
  const name = useSelector(getUsername);
  

  return (
    <>
      <Block>
        <Title>Welcome, {name}</Title>
        <Button onClick={() => dispatch(logOut())}  colorScheme="green">Log out</Button>
      </Block>
    </>
  );
};
