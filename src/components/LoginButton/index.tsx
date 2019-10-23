import * as React from 'react';
import { Button } from "remax/wechat";
import './index.css';

interface Props {
  login?: (event: any) => any;
  children: React.ReactNode,
}

const LoginButton = ({ login, children }: Props) => {
  return (
    <Button
      className="login-button"
      hoverClass="none"
      openType="getUserInfo"
      onGetUserInfo={login}
    >
      {children}
    </Button>
  );
};

export default LoginButton;
