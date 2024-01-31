const UserAuth = ({ authStatus, handleLogin, handleLogout, credentials }) => {
  const renderUser = (authStatus, credentials) => {
    if (authStatus) {
      return (
        <div>
          <h2>Welcome, {credentials.username}</h2>
          <h2>Your email is, {credentials.email}</h2>
          <button
            className="p-3 w-32 bg-orange-500 rounded-md mt-4"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button
            className="p-3 w-32 bg-orange-500 rounded-md mt-4"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      );
    }
  };

  return renderUser(authStatus, credentials);
};

export default UserAuth;
