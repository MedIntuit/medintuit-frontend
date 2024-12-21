import { useState } from "react";
import "./Form.css";
import axios from "axios";
import { BASE_URL, CREATE_CHANNEL_URL } from "../../constants/api_urls";

export default function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    field1: "",
    field2: "",
    field3: "",
    field4: "",
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
          description: formData.description,
        },
        {
          headers: { "x-access-token": token },
        }
      );
      window.alert("Channel Successfully Created");
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
          Name:
        </label>
        <input
          type="text"
          name="fullName"
          className="form-input"
          placeholder="Dew Point Measurement"
          value={formData.fullName}
          onChange={handleInputChange}
        />

        <label htmlFor="field1" className="form-label">
          Field 1:
        </label>
        <input
          type="text"
          name="field1"
          className="form-input"
          placeholder="Enter your field 1"
          value={formData.field1}
          onChange={handleInputChange}
        />

        <label htmlFor="field2" className="form-label">
          Field 2:
        </label>
        <input
          type="text"
          name="field2"
          className="form-input"
          placeholder="Enter your field 2"
          value={formData.field2}
          onChange={handleInputChange}
        />

        <label htmlFor="field3" className="form-label">
          Field 3:
        </label>
        <input
          type="text"
          name="field3"
          className="form-input"
          placeholder="Enter your field 3"
          value={formData.field3}
          onChange={handleInputChange}
        />

        <label htmlFor="field4" className="form-label">
          Field 4:
        </label>
        <input
          type="text"
          name="field4"
          className="form-input"
          placeholder="Enter your field 4"
          value={formData.field4}
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
    </div>
  );
}
