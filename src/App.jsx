import WithAuth from "./components/WithAuth";
import UserAuth from "./components/UserAuth";
import { useState } from "react";
import "./App.css";

const UserWithAuth = WithAuth(UserAuth);

function App() {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleAuthChange = () => {
    setCredentials({
      username: "",
      email: "",
    });
  };

  return (
    <div className="container flex flex-col items-center p-14 bg-sky-500 rounded-md">
      <input
        type="text"
        name="username"
        value={credentials.username}
        placeholder="Enter your username ..."
        onChange={handleInputChange}
        className="w-60 h-10 mb-5 rounded-sm p-3 text-black"
      />
      <input
        type="text"
        name="email"
        value={credentials.email}
        placeholder="Enter your email ..."
        onChange={handleInputChange}
        className="w-60 h-10 mb-5 rounded-sm p-3 text-black"
      />
      <UserWithAuth
        credentials={credentials}
        handleAuthChange={handleAuthChange}
      />
    </div>
  );
}

export default App;
