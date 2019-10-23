import * as React from 'react';

interface ResponseProps {
  detail: Record<string, any>;
}

export default function useUserInfo() {
  const [userInfo, setUserInfo] = React.useState(null);
  function login(response: ResponseProps) {
    const { userInfo } = response.detail;
    userInfo.avatar = userInfo.avatarUrl;
    setUserInfo(response.detail.userInfo);
  }

  return [userInfo, login];
}
