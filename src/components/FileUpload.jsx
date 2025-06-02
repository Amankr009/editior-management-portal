import React, { useRef, useState } from "react";

/* Styles */
import "../styles/file-upload.scss";

/* Icons */
import add from "../icons/add.png";
import filepdf from "../icons/filepdf.png";

const FileUpload = ({uploadedFile, onFileUpload }) => {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(uploadedFile);

  const handleFileChange = (event) => {
    const selected = event.target.files[0];
    if (selected && selected.size <= 50 * 1024 * 1024) {
      setFile(selected);
      onFileUpload?.(selected);
    } else {
      alert("File must be under 50MB.");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.size <= 50 * 1024 * 1024) {
      setFile(droppedFile);
      onFileUpload?.(droppedFile);
    } else {
      alert("File must be under 50MB.");
    }
  };

  return (
    <div className="file-upload-wrapper">
      <div
        className="drop-area"
        onClick={() => fileInputRef.current.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <span>
          Drag and drop files here or <span className="browse-link">browse files</span>
        </span>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
          accept=".pdf,.docx"
        />
      </div>
      <p className="hint">Supported formats: PDF, DOCX (max. 50 mb)</p>
      {file && <div className="file-value author-selector">
        <div className="file-wrap">
          <img className="pdf-icon" style={{cursor: "default"}} src={filepdf} alt="filepdf" />
          {file.name} ({(file.size / (1024 * 1024)).toFixed(1)} mb)
        </div>
        <img className="file-add" style={{cursor: "pointer"}} src={add} alt="add" />
      </div>}
    </div>
  );
};

export default FileUpload;