import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, CHANNEL_URL } from "../../constants/api_urls";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import "./MyChannels.css";

const MyChannel = () => {
  const [loading, setLoading] = useState(true);
  const [channels, setChannels] = useState([]);
  const [temperature, setTemperature] = useState([]);
  const [humidity, setHumidity] = useState([]);
  const [THI, setTHI] = useState([]);
  useEffect(() => {
    const fetchChannels = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(`${BASE_URL}/${CHANNEL_URL}`, {
          headers: { "x-access-token": token },
        });

        console.log("response from channel", response);
        const temperatureArr = [];
        const humidityArr = [];

        for (let i = 0; i < response.data[0].fieldData.length; i++) {
          const temperature = parseFloat(response.data[0].fieldData[i].field1);
          console.log("temperature is:", temperature);
          temperatureArr.push(temperature);
        }

        for (let i = 0; i < response.data[1].fieldData.length; i++) {
          const humidity = parseFloat(response.data[1].fieldData[i].field1);
          console.log("humidity is:", humidity);
          humidityArr.push(humidity);
        }

        setTemperature(temperatureArr);
        setHumidity(humidityArr);

        const thiArr = temperatureArr.map((T, index) => {
          const absHumidity = humidityArr[index] ?? 0;   // handle case where length might differ
          const es = 6.11 * Math.pow(10, (7.5 * T) / (237.3 + T));
          const e = absHumidity * 0.1;
          const RH = (e / es) * 100;
          return 0.8 * T + RH * (T - 14.4) + 46.4;
        });

        setTHI(thiArr);
        console.log("THI values: ", thiArr);

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
        </div>
      )}
    </>
  );
};

export default MyChannel;
