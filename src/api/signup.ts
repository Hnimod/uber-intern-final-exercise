export const signup = (userName: string) => {
  return new Promise<{
    data: { token: string; userName: string; rating: number };
  }>((resolve, reject) => {
    const LOGIN_SUCCESS = {
      token: 'abc',
      userName: userName,
      rating: 5,
    };
    setTimeout(() => {
      resolve({ data: LOGIN_SUCCESS });
    }, 2000);
  });
};
