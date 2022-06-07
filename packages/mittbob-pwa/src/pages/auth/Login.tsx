import { useDispatch} from 'react-redux';
import React from 'react';
import { watchSignIn } from '../../redux/modules/auth0/actions';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(watchSignIn());
  }, [dispatch]);
  return null;
};

export default Login;
