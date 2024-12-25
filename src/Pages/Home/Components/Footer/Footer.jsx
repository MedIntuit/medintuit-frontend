import logo from '/public/images/logo.png'; 
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Company Logo" />
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>About Us</h4>
            <a href="#about">Company Info</a>
            <a href="#team">Our Team</a>
            <a href="#careers">Careers</a>
            <a href="#blog">Blog</a>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <a href="#help-center">Help Center</a>
            <a href="#contact-us">Contact Us</a>
            <a href="#faq">FAQ</a>
            <a href="#terms">Terms of Service</a>
          </div>
          <div className="footer-column">
            <h4>Follow Us</h4>
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#instagram">Instagram</a>
            <a href="#linkedin">LinkedIn</a>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <a href="#docs">Documentation</a>
            <a href="#api">API</a>
            <a href="#community">Community</a>
            <a href="#tutorials">Tutorials</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
