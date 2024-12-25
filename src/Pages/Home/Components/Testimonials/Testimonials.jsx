import Testimonial from "./Components/Testimonial/Testimonial";
import tweetsData from "./Components/tweetsData.json";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials-container">
      <h1 className="testimonials-heading">What our customers say</h1>
      <div className="testimonials-wrapper">
      {tweetsData.map((tweet, index) => (
        <Testimonial
          key={index}
          name={tweet.name}
          twitterHandle={tweet.twitterHandle}
          tweet={tweet.tweet}
          hashtag={tweet.hashtag}
        />
      ))}
    </div>
    </section>
  );
};

export default Testimonials;
