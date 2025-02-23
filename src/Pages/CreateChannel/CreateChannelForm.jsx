import { useState } from "react";
import axios from "axios";
import { BASE_URL, CREATE_CHANNEL_URL } from "../../constants/api_urls";
import { ToastContainer, toast } from "react-toastify";

import "./CreateChannelForm.css";

export default function CreateChannelForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    field1: "",
    minThreshold: "",
    maxThreshold: "",
    description: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const createChannel = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        `${BASE_URL}/${CREATE_CHANNEL_URL}`,
        {
          name: formData.fullName,
          field1: formData.field1,
          minThreshold: formData.minThreshold,
          maxThreshold: formData.maxThreshold,
          description: formData.description,
        },
        {
          headers: { "x-access-token": token },
        }
      );
      toast.success("Channel Successfully Created");
      console.log("Response:", response);
    } catch (error) {
      console.error(
        "Channel Creation Failed:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="form-container">
      <form className="form">
        <h2 className="form-title">Create Channel</h2>

        <label htmlFor="name" className="form-label">
          Channel Name:
        </label>
        <input
          type="text"
          name="fullName"
          className="form-input"
          placeholder="e.g.- Temperature sensor device"
          value={formData.fullName}
          onChange={handleInputChange}
        />

        <label htmlFor="field" className="form-label">
          Field To Be Measured:
        </label>
        <input
          type="text"
          name="field"
          className="form-input"
          placeholder="e.g.- Temperature"
          value={formData.field}
          onChange={handleInputChange}
        />
        <label htmlFor="field1" className="form-label">
          Minimun Threshold:
        </label>
        <input
          type="text"
          name="minThreshold"
          className="form-input"
          placeholder="Enter your minimum threshold value"
          value={formData.minThreshold}
          onChange={handleInputChange}
        />
        <label htmlFor="field1" className="form-label">
          Maximum Threshold:
        </label>
        <input
          type="text"
          name="maxThreshold"
          className="form-input"
          placeholder="Enter your maximum threshold value"
          value={formData.maxThreshold}
          onChange={handleInputChange}
        />

        <label htmlFor="description" className="form-label">
          Description:
        </label>
        <textarea
          name="description"
          className="form-textarea"
          placeholder="Enter a description"
          value={formData.description}
          onChange={handleInputChange}
          rows="4"
          cols="50"
        />

        <button type="button" className="form-button" onClick={createChannel}>
          Save Channel
        </button>
      </form>
      <ToastContainer position="bottom-left" />
    </div>
  );
}
