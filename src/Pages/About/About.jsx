import aboutImg from "../../../public/images/about-us-img.svg";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-content">
        We specialize in providing real-time
        monitoring solutions. Our innovative approach leverages
        cutting-edge technology to deliver accurate and timely data, empowering
        users to make informed decisions. With a dedicated team of experts in
        software development and data analysis, we strive to create
        user-friendly tools that visualize temperature trends clearly and
        effectively. Our goal is to help individuals and organizations monitor
        and analyze data effortlessly, ensuring optimal conditions
        and safety in various environments. we
        continuously work to enhance our systems, ensuring they meet the highest
        standards of quality and performance.
      </p>
      <img className="about-image" src={aboutImg} alt="" />
    </div>
  );
};

export default About;
