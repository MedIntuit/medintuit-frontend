import HeroImage from "/public/images/healthcare.jpg";
import Features from "./Components/Features/Features";
import Testimonials from "./Components/Testimonials/Testimonials";
import "./home.css";

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to the IoT Dashboard</h1>
          <p>
            Manage your smart devices, monitor real-time data, and create
            customized channels for seamless IoT integration.
          </p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="hero-image">
          <img src={HeroImage} alt="IoT Graphic" />
        </div>
      </section>

      <Features />

      <section className="how-it-works-section">
        <h2>How It Works</h2>
        <div className="steps-grid">
          <div className="step-item">
            <h3>1. Create an Account</h3>
            <p>
              Sign up to start using the dashboard and managing your IoT
              devices.
            </p>
          </div>
          <div className="step-item">
            <h3>2. Create Channels</h3>
            <p>
              Create channels to collect data from your IoT devices and manage
              them all in one place.
            </p>
          </div>
          <div className="step-item">
            <h3>3. Start Monitoring</h3>
            <p>
              Monitor real-time data, analyze trends, and get insights from your
              devices.
            </p>
          </div>
        </div>
      </section>

      <Testimonials />

      <footer className="footer-section">
        <p>&copy; 2024 My IoT App. All Rights Reserved.</p>
        <ul>
          <li>
            <a href="#privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="#terms-of-service">Terms of Service</a>
          </li>
          <li>
            <a href="#contact-us">Contact Us</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Home;
