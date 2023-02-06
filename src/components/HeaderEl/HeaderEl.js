import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { Outlet } from 'react-router-dom';
import { AuthNav } from './AuthNav/AuthNav';
import { Header, Loading, NavEl, HomeBox } from './headerEl.styled';
import { RegisterHome } from './RegisterHome/RegisterHome';
import { UserMenu } from './UserMenu/UserMenu';
import { ContactsHome } from './ContactsHome/ContactsHome';

export const HeaderEl = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <Header>
        <NavEl>
          <HomeBox>
            <RegisterHome />
            {isLoggedIn && <ContactsHome />}
          </HomeBox>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </NavEl>
      </Header>
      <Suspense fallback={<Loading>Loading...</Loading>}>
        <Outlet />
      </Suspense>
    </>
  );
};
