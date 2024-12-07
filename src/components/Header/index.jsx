import { useNavigate } from "react-router-dom";
import "./header.css";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <h1 className="name" onClick={() => navigate("/")}>
        HealthCare
      </h1>
      <ul className="header-links">
        <li className="channel-options-wrapper" htmlFor="channel">Channels
          <ul className="channel-options">
            <li onClick={() => navigate("/create-channel")}>Create Channel</li>
            <li>My Channels</li>
          </ul>
        </li>
        <li>App</li>
        <li>Community</li>
        <li>Support</li>
      </ul>
      <div className="login-button" onClick={() => navigate("/login")}>
        Login
      </div>
    </div>
  );
}
