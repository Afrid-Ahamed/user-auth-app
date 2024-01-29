import React, { useState } from "react";

const WithAuth = (Component) => (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // handle login
  const handleLogin = () => {
    if (props) {
      const { username, email } = props.credentials;
      if (username === "ahamed" && email === "ahamed@123.com") {
        setIsLoggedIn(true);
      }
    }
  };

  // handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Component
      {...props}
      authStatus={isLoggedIn}
      handleLogin={handleLogin}
      handleLogout={handleLogout}
    />
  );
};

export default WithAuth;
