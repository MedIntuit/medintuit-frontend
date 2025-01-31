import { useNavigate } from "react-router-dom";
import logo from "../../../public/images/logo.png";
import { AuthContext } from "../../context/auth";
import { useContext } from "react";
import "./header.css";

export default function Header() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="header">
      <h1 className="logo" onClick={() => navigate("/")}>
        <img src={logo} alt="MedIntuit" />
      </h1>
      <ul className="header-links">
        {isAuthenticated && (
          <>
            <li className="channel-options-wrapper" htmlFor="channel">
              Channels
              <ul className="channel-options">
                <li onClick={() => navigate("/create-channel")}>
                  Create Channel
                </li>
                <li onClick={() => navigate("/my-channel")}>My Channels</li>
              </ul>
            </li>
            <li className="channel-options-wrapper" htmlFor="preprocessing">
              Data Preprocessing
              <ul className="channel-options">
                <li onClick={() => navigate("/data-cleaning-by-finding-missing-values")}>
                  Data cleaning - Missing values
                </li>
              </ul>
            </li>
          </>

        )}
        <li>
          <a href="https://github.com/MedIntuit">GitHub community</a>
        </li>
        <li onClick={() => navigate("/about")}>About</li>
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
