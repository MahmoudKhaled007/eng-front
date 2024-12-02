import React, { useState } from "react";

const FileUpload = () => {
  const whatsappLink =
    "https://api.whatsapp.com/send/?phone=+201065216442&text=Please+upload+our+photos+here%20%E2%9D%A4%EF%B8%8F%E2%9D%A4%EF%B8%8F&type=phone_number&app_absent=0";

  const [files, setFiles] = useState([]);
  const [fileCount, setFileCount] = useState(0); // To track the number of files selected

  // Handle file selection
  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    setFiles(selectedFiles); // Update state with selected files
    setFileCount(selectedFiles.length); // Update file count
  };

  // Handle upload
  const handleUpload = async () => {
    const formData = new FormData();
    for (let file of files) {
      formData.append("files", file);
    }

    try {
      const response = await fetch("http://localhost:5000/api/upload/start", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        alert("Files uploaded successfully!");
      } else {
        alert("Error uploading files: " + data.message);
      }
    } catch (error) {
      alert("An error occurred while uploading: " + error.message);
    }
  };

  return (
    <div className="file-upload-container">
      {/* Custom label for the file input */}

      {/* Upload button */}
      {/* <button onClick={handleUpload} className="upload-button">
        Upload Memories
      </button> */}
      <button
        onClick={() => window.open(whatsappLink, "_blank")}
        className="upload-button"
      >
        Upload Memories
      </button>
    </div>
  );
};

export default FileUpload;
