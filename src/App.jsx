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

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    setCredentials(inputs);
    setInputs({
      username: "",
      email: "",
    });
  };

  return (
    <div className="container flex flex-col items-center p-14 bg-sky-500 rounded-md">
      <input
        type="text"
        name="username"
        value={inputs.username}
        placeholder="Enter your username ..."
        onChange={handleInputChange}
        className="w-60 h-10 mb-5 rounded-sm p-3 text-black"
      />
      <input
        type="text"
        name="email"
        value={inputs.email}
        placeholder="Enter your email ..."
        onChange={handleInputChange}
        className="w-60 h-10 mb-5 rounded-sm p-3 text-black"
      />
      <UserWithAuth credentials={credentials} handleLogin={handleLogin} />
    </div>
  );
}

export default App;
