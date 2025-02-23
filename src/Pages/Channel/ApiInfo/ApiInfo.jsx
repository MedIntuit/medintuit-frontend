import { useState } from 'react';
import { RiEyeCloseFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import keyIcon from '../../../../public/images/key.svg'
import './ApiInfo.css'

const APIInfo = ({apiKey, fieldName}) => {
  const [showKey, setShowKey] = useState(false);
  const backendUrl = "https://medintuit-backend-2-0.onrender.com/update-channel";

  const truncateapiKeys = (fullapiKey, boundaryValue) => {
    const truncatedapiKey = `${fullapiKey.slice(0, boundaryValue)}${"*".repeat(boundaryValue)}${fullapiKey.slice(-boundaryValue)}`
    return truncatedapiKey;
  }
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };
  const requestBodyToCopy = `{
    "api_key": ${apiKey},
    "field": ${fieldName}
  }`;
  const requestBody = `{
    "api_key": "${showKey ? truncateapiKeys(apiKey, 2) : "******"}",
    "field": ${fieldName}
}`;

  return (
    <div className="api-info-section">
      <div className="api-key-container">
        <h3>Your API Key</h3>
        <div className="api-key-box">
          <span>{showKey ? truncateapiKeys(apiKey, 5) : "*****************"}</span>
          <div className='eye-icon'>
            <span onClick={() => setShowKey(!showKey)}>
              {showKey ? <FaEye /> : <RiEyeCloseFill />}
            </span>
            <button onClick={() => handleCopy(apiKey)}>Copy</button>
          </div>
        </div>
      </div>

      <div className="api-request-container">
        <h3>API Request Info</h3>
        <p><strong>Backend URL:</strong> <span className='monospace'>{backendUrl}</span></p>
        <br/>
        <div className="request-body-box">
          <h5>Request Body:</h5>
          <div>
            <pre>{requestBody}</pre>
            <button className='mt4' onClick={() => handleCopy(requestBodyToCopy)}>Copy</button>
          </div>
        </div>
      </div>
      <div className='key-icon'><img src={keyIcon} alt=''/></div>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default APIInfo;
