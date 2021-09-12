export const login = ({ email, password }) => {
    return {
      url: `/api/user/auth`,
      method: "POST",
      data: {
        email,
        password,
      },
      feedback: {
        header: "Login",
        body: "welcome back",
        time: "now",
      },
      onSuccess: "auth/loggedin",
      useGlobalSpinner: true,
      processName: "signing in ...",
    };
  };
  export const register = ({ name, email, password, role }) => {
    return {
      url: `/api/user/register`,
      method: "POST",
      data: {
        name,
        email,
        password,
        role,
      },
      onSuccess: "auth/loggedin",
      useGlobalSpinner: true,
      processName: "signing up ...",
    };
  };