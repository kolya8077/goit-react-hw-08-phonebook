import { LinkEl } from '../headerEl.styled';

export const AuthNav = () => {
  return (
    <>
      <div>
        <LinkEl to="register">Register</LinkEl>
        <LinkEl to="logIn">Log in</LinkEl>
      </div>
    </>
  );
};
