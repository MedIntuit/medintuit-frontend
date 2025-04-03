import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, CHANNEL_URL } from "../../constants/api_urls";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import "./MyChannels.css";

const MyChannel = () => {
  const [loading, setLoading] = useState(true);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const fetchChannels = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(`${BASE_URL}/${CHANNEL_URL}`, {
          headers: { "x-access-token": token },
        });
        setChannels(response.data);
        setLoading(false);
      } catch (error) {
        console.error("There was an error fetching the channels!", error);
      }
    };

    fetchChannels();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="channel-container">
          {channels.map((channel) => (
            <Link to={`/channel/${channel._id}`} key={channel._id}>
              <div className="channel-card">
                <h3>{channel.name} Channel</h3>
                <p className="channel-description">{channel.description}</p>
                <div className="channel-fields">
                  <p><span className="bold">Field :</span>{channel.field1}</p>
                </div>
              </div>
            </Link>
          ))}
          {/* THI Channel */}
          <Link to={`/thi-graph`}>
              <div className="channel-card">
                <h3>THI Channel</h3>
                {/* <p className="channel-description">{channel.description}</p> */}
                <div className="channel-fields">
                  <p><span className="bold">Field :</span>Humidity vs Temperature</p>
                </div>
              </div>
            </Link>
        </div>
      )}
    </>
  );
};

export default MyChannel;
