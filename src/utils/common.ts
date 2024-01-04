// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getLocalStorageToken: () => {
  accessToken: string;
  refreshToken: string;
  accessTokenExpire: number;
  userId: string;
  isAdmin: boolean;
  provider: string;
} = () => {
  let token: string | undefined | null;
  if (typeof window !== "undefined") {
    const key =
      process.env.NEXT_PUBLIC_LOCALSTORAGE_LOGIN === undefined
        ? "CHECK_LOGIN"
        : process.env.NEXT_PUBLIC_LOCALSTORAGE_LOGIN;
    token = window.localStorage.getItem(key);
  }
  if (!token) {
    return null;
  }

  let parsedToken;
  try {
    parsedToken = JSON.parse(token);
  } catch (err) {
    console.log(err);
    return null;
  }

  if (!parsedToken) return null;
  return parsedToken;
};
