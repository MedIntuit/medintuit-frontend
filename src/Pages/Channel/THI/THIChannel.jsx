import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL, CHANNEL_URL } from "../../../constants/api_urls.js";
import Chart from "../../../components/Chart/Chart.jsx";
import Loader from "../../../components/Loader/Loader.jsx";
import './THIChannel.css'

const THIChannel = () => {
  const [loading, setLoading] = useState(true);
  const [thiData, setThiData] = useState([]);

  useEffect(() => {
    fetchChannels();
  }, []);

  async function fetchChannels() {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(`${BASE_URL}/${CHANNEL_URL}`, {
        headers: { "x-access-token": token },
      });
      // TODO: add error handling in case user haven't added temp and humidity values
      calculateThiValues([...response.data[0].fieldData], [...response.data[1].fieldData]);
      setLoading(false);
    } catch (error) {
      console.error("There was an error fetching the channels!", error);
    }
  };

  async function calculateThiValues(temperatureData, humidityData) {
    const thiArr = temperatureData.map((tempEntry, index) => {
        const temperature = parseFloat(tempEntry.field1);
        const humidity = parseFloat(humidityData[index]?.field1 ?? 0); // Handle cases where humidityData might be shorter
        
        const es = 6.11 * Math.pow(10, (7.5 * temperature) / (237.3 + temperature));
        const e = humidity * 0.1;
        const RH = (e / es) * 100;
        
        const thiValue = 0.8 * temperature + RH * (temperature - 14.4) + 46.4;
        
        return {
            _id: tempEntry._id,
            timestamp: tempEntry.timestamp,
            field1: thiValue
        };
    });
    setThiData(thiArr);
}


  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="chart-container">
          <div className="chart-wrapper">
            <h1>THI Graph (Temperature vs Humidity)</h1>
            <Chart fieldName="THI" data={thiData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default THIChannel;
