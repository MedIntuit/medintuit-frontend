import { useState, useEffect } from 'react';
import axios from 'axios';
import './UserChannels.css';
import { BASE_URL, CHANNEL_URL } from '../../../constants/api_urls';

const MyChannel = () => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const fetchChannels = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get(`${BASE_URL}/${CHANNEL_URL}`, {
          headers: { "x-access-token": token },
        });
        setChannels(response.data);
      } catch (error) {
        console.error('There was an error fetching the channels!', error);
      }
    };

    fetchChannels();
  }, []);

  return (
    <div className="channel-container">
      {channels.map((channel) => (
        <div key={channel._id} className="channel-card">
          <h3>{channel.name} Channel</h3>
          <p className='channel-description'>{channel.description}</p>
          <div className="channel-fields">
            <p>Field 1: {channel.field1}</p>
            <p>Field 2: {channel.field2}</p>
            <p>Field 3: {channel.field3}</p>
            <p>Field 4: {channel.field4}</p>
          </div>
          <p>API Key: {channel.apiKey}</p>
        </div>
      ))}
    </div>
  );
};

export default MyChannel;
