import React, { useEffect, useState } from 'react';
import { login, logout, onUserStateChange } from '../../common/firebase';
import CommonStyles from './../../styles/CommonStyles';

const LoginPage = () => {
  // 임시방면
  const [user, setUser] = useState<any>();

  useEffect(() => {
    onUserStateChange((user: any) => {
      console.log(user);
      setUser(user);
    });
  }, []);
  const handleLogin = () => {
    login().then(setUser);
  };
  const handleLogout = () => {
    logout().then(setUser);
  };

  return (
    <CommonStyles>
      {!user && <button onClick={handleLogin}>Login</button>}
      {user && <button onClick={handleLogout}>Logout</button>}
    </CommonStyles>
  );
};
export default LoginPage;
