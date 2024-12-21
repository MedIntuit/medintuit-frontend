import { useNavigate } from "react-router-dom";
import "./header.css";
import { AuthContext } from "../../context/auth";
import { useContext } from "react";

export default function Header() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="header">
      <h1 className="name" onClick={() => navigate("/")}>
        MedIntuit
      </h1>
      <ul className="header-links">
        {isAuthenticated && (
          <li className="channel-options-wrapper" htmlFor="channel">
            Channels
            <ul className="channel-options">
              <li onClick={() => navigate("/create-channel")}>
                Create Channel
              </li>
              <li onClick={() => navigate("/my-channel")}>My Channels</li>
            </ul>
          </li>
        )}
        <li>App</li>
        <li>Community</li>
        <li>Support</li>
      </ul>
      {!isAuthenticated ? (
        <>
          <div className="login-button" onClick={() => navigate("/login")}>
            Login
          </div>
          <div className="login-button" onClick={() => navigate("/signup")}>
            Signup
          </div>
        </>
      ) : (
        <div className="login-button" onClick={logout}>
          Signout
        </div>
      )}
    </div>
  );
}
