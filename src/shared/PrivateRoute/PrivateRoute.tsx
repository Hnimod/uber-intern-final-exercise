import { Route, Redirect } from 'react-router-dom';

import { useAppSelector } from '../../app/hooks';
import { selectToken } from '../../features/auth/authSlice';

interface Props {
  component: React.FunctionComponent;
  path: string;
  exact?: boolean;
}

const PrivateRoute = ({ component, path, exact }: Props) => {
  const auth = useAppSelector(selectToken);

  return !!auth ? (
    <Route component={component} path={path} exact={exact} />
  ) : (
    <Redirect to="/" />
  );
};

export default PrivateRoute;
