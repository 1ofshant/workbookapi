import React, { useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const PretectecRoute = (props) => {
  // const isAuth = useSelector(state => state.auth.isAuth);
  const role = useSelector(state => state.user.role)
  
  useEffect(() => {
    if (role !== 1) {
      history.push('/');
    }
  }, [role]);

  return (
    <Route {...props} />
  );
};

export default PretectecRoute;
