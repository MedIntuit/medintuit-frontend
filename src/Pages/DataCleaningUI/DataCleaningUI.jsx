import React, { useState } from "react";
import * as tf from "@tensorflow/tfjs";
import { MdDownload } from "react-icons/md";
import "./DataCleaningUI.css";

function CSVCleaner() {
    const [cleanedCSV, setCleanedCSV] = useState("");
    const [downloadLink, setDownloadLink] = useState("");

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (!file) {
            alert("Please upload a CSV file first.");
            return;
        }

        const reader = new FileReader();
        reader.onload = async (e) => {
            const csvData = e.target.result;
            const dataArray = parseCSV(csvData);

            const isFirstRowHeaders = dataArray[0].some((value) => isNaN(value));
            const headers = isFirstRowHeaders ? dataArray[0] : null;
            const rows = isFirstRowHeaders ? dataArray.slice(1) : dataArray;

            const numericData = rows.map((row) =>
                row.map((value) => (value === "" ? NaN : parseFloat(value)))
            );

            const cleanedNumericData = await knnImpute(numericData);

            const cleanedData = headers ? [headers, ...cleanedNumericData] : cleanedNumericData;

            const cleanedCSV = arrayToCSV(cleanedData);
            setCleanedCSV(cleanedCSV);

            const blob = new Blob([cleanedCSV], { type: "text/csv" });
            const url = URL.createObjectURL(blob);
            setDownloadLink(url);
        };

        reader.readAsText(file);
    };

    const parseCSV = (csv) => {
        return csv.split("\n").map((row) => row.split(",").map((value) => value.trim()));
    };

    const arrayToCSV = (array) => {
        return array.map((row) => row.join(",")).join("\n");
    };

    const knnImpute = async (data, k = 3) => {
        const tfData = tf.tensor2d(data);

        const filledData = tfData.arraySync().map((row, rowIndex) => {
            return row.map((value, colIndex) => {
                if (!isNaN(value)) return value;

                const neighbors = [];
                for (let i = 0; i < tfData.shape[0]; i++) {
                    if (i !== rowIndex && !isNaN(tfData.arraySync()[i][colIndex])) {
                        neighbors.push(tfData.arraySync()[i][colIndex]);
                    }
                }

                if (neighbors.length > 0) {
                    return (
                        neighbors.slice(0, k).reduce((a, b) => a + b, 0) /
                        neighbors.slice(0, k).length
                    );
                } else {
                    return 0;
                }
            });
        });

        return filledData;
    };

    const downloadDummyFile = () => {
        const dummyCSV = `ID,Age,Salary,Experience
1,25,50000,2
2,30,,5
3,,70000,8
4,40,80000,
5,35,60000,7`;

        const blob = new Blob([dummyCSV], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "dummy_data.csv";
        link.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="csv-cleaner-container">
            <h2>Upload CSV for Cleaning</h2>
            <input
                type="file"
                id="csvFile"
                accept=".csv"
                onChange={handleFileUpload}
                className="file-input"
            />
            <br />
            <br />

            {!downloadLink ?
                (
                    <p className="dummy-download-text"><span onClick={downloadDummyFile}><MdDownload /> Download</span> dummy csv to try !</p>
                )
                :
                (
                    <div className="download-section fade-in">
                        <h3>Download Cleaned File:</h3>
                        <a href={downloadLink} download="cleaned_data.csv" className="download-link">
                            Download CSV
                        </a>
                    </div>
                )}
        </div>
    );
}

export default CSVCleaner;