import React, { useState } from "react";

/* Styles */
import "../styles/task-actions.scss";

/* Components */
import FileUpload from "./FileUpload";
import Dropdown from "./DropDown";
import Selector from "./Selector";

/* Icons */
import boldcross from "../icons/boldcross.png";

/* Constants */
import { assigneeOptions, statusOptions } from "../constants/ongoingTask";

const TaskActions = ({data, onClose}) => {
  const {manuscript, author, assignedTo, status, file} = data;

  return (
    <div className="task-actions-mask">
      <div className="task-actions-container">
        <div className="task-actions-wrap">
          <div className="header">
            <div className="header-title">Task Actions</div>
            <div className="close-icon">
              <img style={{cursor: "pointer"}} src={boldcross} alt="close" onClick={() => onClose()} />
            </div>
          </div>
          <div className="container-body">
            <div className="field-wrap">
              <div className="field-title">Manuscript</div>
              <div className="manuscript-value">{manuscript}</div>
            </div>
            <div className="field-wrap">
              <div className="field-title">Author</div>
              <div className="author-value"><Selector value={author} /></div>
            </div>
            <div className="field-wrap">
              <div className="field-title">Assigned to</div>
              <div className="assigned-value"><Dropdown value={assignedTo} options={assigneeOptions} /></div>
            </div>
            <div className="field-wrap">
              <div className="field-title">Status</div>
              <div className="status-value"><Dropdown value={status} options={statusOptions} /></div>
            </div>
            <div className="field-wrap">
              <div className="field-title">Upload File</div>
              <div className="file-upload-wrap">
                <FileUpload uploadedFile={file} />
              </div>
            </div>
          </div>
        </div>
        <div className="button-wrap"> 
          <button className="cancel-btn" onClick={() => onClose()}>Cancel</button>
          <button className="save-btn" onClick={() => onClose()}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default TaskActions;