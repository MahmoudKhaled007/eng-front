import React, { useState } from "react";

const FileUpload = () => {
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
      <label htmlFor="file-input" className="custom-file-label">
        Upload Files
      </label>

      {/* Hidden file input */}
      <input
        id="file-input"
        type="file"
        multiple
        onChange={handleFileChange}
        style={{ display: "none" }} // Hide the default input
      />

      {/* File counter display */}
      <div id="file-counter" className="file-counter">
        {fileCount > 0 ? `${fileCount} file(s) selected` : "No files selected"}
      </div>

      {/* Upload button */}
      <button onClick={handleUpload} className="upload-button">
        Upload Memories
      </button>
    </div>
  );
};

export default FileUpload;
