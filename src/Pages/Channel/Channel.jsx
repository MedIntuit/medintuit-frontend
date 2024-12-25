import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL, GET_CHANNEL_URL } from "../../constants/api_urls";
import { useParams } from "react-router-dom";
import Chart from "../../components/Chart/Chart.jsx";
import './channel.css'
import Loader from "../../components/loader/loader.jsx";

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
          <Chart data={channelData.fieldData} />
        </div>
      )}
    </div>
  );
};

export default Channel;
