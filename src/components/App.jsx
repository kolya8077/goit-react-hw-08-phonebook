import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactBook } from './ContactBook/ContactBook';
import { HeaderEl } from 'components/HeaderEl/HeaderEl';
import { NotFound } from './NotFound/NotFound';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { LogIn } from './LogIn/LogIn';
import { HomePage } from './HomePage/HomePage';
import { refreshUser } from 'redux/auth/auth-operations';
import { RestrictedRoute } from 'redux/auth/RestrictedRoute';
import { PrivateRoute } from 'redux/auth/PrivateRoute';
import { selectIsRefreshing } from 'redux/auth/auth-selectors';

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    !isRefreshing && (
      <>
        <Routes>
          <Route path="/" element={<HeaderEl />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  element={RegisterForm}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute element={LogIn} redirectTo="/contacts" />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute element={ContactBook} redirectTo="/login" />
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    )
  );
}
