import profileImg from "/public/images/user.svg";
import "./Testimonial.css";

const Testimonial = ({ name, twitterHandle, tweet, hashtag }) => {
  return (
    <div className="tweet-container">
      <div className="tweet-header">
        <img className="profile-image" src={profileImg} alt="Profile" />
        <div className="tweet-author">
          <span className="author-name">{name}</span>
          <span className="author-handle">{twitterHandle}</span>
        </div>
        <div className="tweet-icon">
          <svg viewBox="0 0 24 24" className="twitter-icon" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482 13.944 13.944 0 0 1-10.13-5.14 4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.19 4.096a4.904 4.904 0 0 1-2.228-.616v.062a4.918 4.918 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.224.084 4.923 4.923 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.104c-.396 0-.788-.023-1.17-.067a13.945 13.945 0 0 0 7.548 2.212c9.056 0 14.01-7.496 14.01-13.986 0-.213-.004-.425-.014-.637a10.025 10.025 0 0 0 2.46-2.548l-.047-.02z" 
              fill="#1da1f2" 
            />
          </svg>
        </div>
      </div>
      <div className="tweet-content">{tweet}</div>
      <div className="tweet-footer">
        <a href="#" className="tweet-hashtag">
          {hashtag}
        </a>
      </div>
    </div>
  );
};

export default Testimonial;
