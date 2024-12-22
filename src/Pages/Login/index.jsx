import { useContext, useState } from "react";
import axios from "axios";
import "./login.css";
import { BASE_URL, LOGIN_URL } from "../../constants/api_urls";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BASE_URL}/${LOGIN_URL}`, {
        username: credentials.username,
        password: credentials.password,
      });
      const token = response?.data?.accessToken;
      if (token) login(token);
      toast.success("Successfully Logged In");
      navigate("/");
    } catch (error) {
      console.error(
        "Login failed:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <ToastContainer position="bottom-left" />
    </div>
  );
};

export default Login;
