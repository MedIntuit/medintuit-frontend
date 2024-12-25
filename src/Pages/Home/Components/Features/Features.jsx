import createImg from "/public/images/Create.png"
import apiImg from "/public/images/api.svg"
import realTimeImg from "/public/images/real-time.svg"
import "./Features.css";

const Features = () => {
  return (
    <section className="features-section">
      <h2>Features</h2>
      <div className="features-grid">
        <div className="feature-item">
          <img src={createImg} alt="" />
          <h3>Create Channels</h3>
          <p>
            Set up multiple channels to collect data from various IoT devices,
            ensuring streamlined data flow.
          </p>
        </div>
        <div className="feature-item">
        <img src={realTimeImg} alt="" />
          <h3>View Real-Time Data</h3>
          <p>
            Access and monitor real-time data from your connected devices in a
            simple and intuitive interface.
          </p>
        </div>
        <div className="feature-item">
        <img src={apiImg} alt="" />
          <h3>Custom API Keys</h3>
          <p>
            Generate unique API keys for secure data access, supporting both
            read and write operations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
