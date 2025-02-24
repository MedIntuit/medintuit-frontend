import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL, GET_CHANNEL_URL } from "../../constants/api_urls";
import { useParams } from "react-router-dom";
import Chart from "../../components/Chart/Chart.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import ApiInfo from "./ApiInfo/ApiInfo.jsx";
import './Channel.css'

const Channel = () => {
  const [loading, setLoading] = useState(true);
  const [channelData, setChannelData] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
    const fetchChannelData = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          `${BASE_URL}/${GET_CHANNEL_URL}/${id}`,
          {
            headers: { "x-access-token": token },
          }
        );
        setChannelData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("There was an error fetching the channels!", error);
      }
    };

    fetchChannelData();
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="chart-container">
          <div className="chart-wrapper">
          <h1>{channelData.name}</h1>
          <Chart fieldName={channelData.field1} data={channelData.fieldData} minThresholdValue={channelData.minThreshold} maxThresholdValue={channelData.maxThreshold} />
          </div>
          <div>
            <ApiInfo apiKey={channelData.apiKey} fieldName={channelData.field1} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Channel;
