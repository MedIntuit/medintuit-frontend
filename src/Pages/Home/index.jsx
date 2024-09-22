import HeroImage from '/public/images/healthcare.jpg'
import './home.css';

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to the IoT Dashboard</h1>
          <p>Manage your smart devices, monitor real-time data, and create customized channels for seamless IoT integration.</p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="hero-image">
          <img src={HeroImage} alt="IoT Graphic" />
        </div>
      </section>

      <section className="features-section">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Create Channels</h3>
            <p>Set up multiple channels to collect data from various IoT devices, ensuring streamlined data flow.</p>
          </div>
          <div className="feature-item">
            <h3>View Real-Time Data</h3>
            <p>Access and monitor real-time data from your connected devices in a simple and intuitive interface.</p>
          </div>
          <div className="feature-item">
            <h3>Custom API Keys</h3>
            <p>Generate unique API keys for secure data access, supporting both read and write operations.</p>
          </div>
        </div>
      </section>

       <section className="how-it-works-section">
        <h2>How It Works</h2>
        <div className="steps-grid">
          <div className="step-item">
            <h3>1. Create an Account</h3>
            <p>Sign up to start using the dashboard and managing your IoT devices.</p>
          </div>
          <div className="step-item">
            <h3>2. Create Channels</h3>
            <p>Create channels to collect data from your IoT devices and manage them all in one place.</p>
          </div>
          <div className="step-item">
            <h3>3. Start Monitoring</h3>
            <p>Monitor real-time data, analyze trends, and get insights from your devices.</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-item">
            <p>&apos;This platform has transformed how we monitor our IoT devices. It&apos;s simple and efficient!&apos;</p>
            <h4>- Mr. Mayank Rathore, Senior Backend Engineer</h4>
          </div>
          <div className="testimonial-item">
            <p>&apos;The ability to create custom channels and get real-time data is a game changer.&apos;</p>
            <h4>- Mr. Vishu Malik, Senior MQTT Engineer</h4>
          </div>
        </div>
      </section>

      <footer className="footer-section">
        <p>&copy; 2024 My IoT App. All Rights Reserved.</p>
        <ul>
          <li><a href="#privacy-policy">Privacy Policy</a></li>
          <li><a href="#terms-of-service">Terms of Service</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default Home;
