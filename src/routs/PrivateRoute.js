import { useSelector } from 'react-redux';
import { getIsLoggedIn, selectIsRefreshing } from 'redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ element: Element, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);


  const souldRedirect = !isRefreshing && !isLoggedIn;

  return souldRedirect ? <Navigate to={redirectTo} /> : <Element />;
};
