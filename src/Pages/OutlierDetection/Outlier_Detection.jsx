import React, { useState } from 'react'
import * as d3 from "d3"
import { saveAs } from "file-saver"
import "./Outlier_detection.css"

const Outlier_detection = () => {

  const [data, setData] = useState([])                    // to store original dataset
  const [cleanedData, setCleanedData] = useState([])      // to store cleaned data after removal of outliers
  const [fileName, setFileName] = useState("")            // stores the uploaded file
  const [currentPage, setCurrentPage] = useState(0)       // keeps track of the current page in the dataset
  const rowsPerPage = 5

  const UploadFile = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFileName(file.name)                // sets the filename in state var

      const reader = new FileReader();      // creates a file reader var to read the file
      reader.onload = (e) => {
        try {
          const text = e.target.result      // gets the file content as in text form
          const parsedData = d3.csvParse(text)      // parses the csv data 
          setData(parsedData)               // stores the parsed data in state var
        } catch (error) {
          console.error("Error while parsing CSV file:", error)
          alert("Failed to read the file. Please check the format and try again")
        }
      };
      reader.onerror = () => {
        console.error("Error reading file")
        alert("Error reading file. Please try again.")
      }
      reader.readAsText(file);       // reads the file as a text string
    }
  }

  const Detect_Remove_Outliers = () => {
    if (data.length === 0 || !data[0]) return;

    const numericColumns = Object.keys(data[0] || {}).filter((key) => !isNaN(data[0][key]));
    let cleaned = [...data]

    numericColumns.forEach((col) => {
      let values = cleaned.map((d) => parseFloat(d[col])).filter((v) => !isNaN(v));
      const sortedVal = [...values].sort(d3.ascending)
      const Q1 = d3.quantile(sortedVal, 0.25)
      const Q3 = d3.quantile(sortedVal, 0.75)
      const IQR = Q3 - Q1
      const lowerBound = Q1 - 1.5 * IQR
      const upperBound = Q3 + 1.5 * IQR

      cleaned = cleaned.filter((d) => {
        const value = parseFloat(d[col]);
        return value >= lowerBound && value <= upperBound;
      })
    })
    setCleanedData(cleaned)
  }

  const downloadCSV = () => {
    if (cleanedData.length === 0) {
      alert("No cleaned data available to download.")
      return;
    }
    try {
      if (!Array.isArray(cleanedData) || cleanedData.length === 0 || Object.keys(cleanedData[0]).length === 0) {
        throw new Error("Invalid data format")
      }
      const csvData = d3.csvFormat(cleanedData)
      const blob = new Blob([csvData], { type: "text/csv; charset=utf-8;" });
      saveAs(blob, "cleaned_" + fileName)
    } catch (error) {
      console.error("Error formatting CSV:", error)
      alert("Failed to generate CSV file. please try again.")
    }
  }

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const paginatedData = data.slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage)

  return (
    <div className='outlier'>
      <h1 className='head'>Outlier Detection And Cleaning</h1>
      <div className='input'>
        <input type="file" accept='.csv' onChange={UploadFile} />
        <div className='btn'>
          <button onClick={Detect_Remove_Outliers}>Remove Outliers</button>
          <button onClick={downloadCSV} disabled={cleanedData.length === 0}>
            Download Cleaned Data
          </button>
        </div>
      </div>
      <h2 className='data-preview'>Dataset Preview</h2>
      <div>
        <table className='table-preview'>
          <thead>
            <tr>
              {data.length > 0 && Object.keys(data[0]).map((key) => <th key={key}>{key}</th>)}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((val, i) => (
                  <td key={i}>
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='prev-next'>
        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))} disabled={currentPage === 0}>
          Previous
        </button>
        <span>Page {currentPage + 1} of {totalPages}</span>
        <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))} disabled={currentPage >= totalPages - 1}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Outlier_detection
