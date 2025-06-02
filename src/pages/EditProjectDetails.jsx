import React, { use, useState } from "react";

/* Styles */
import "../styles/edit-project-details.scss";

/* Icons */
import leftarrow from "../icons/leftarrow.png";
import excel from "../icons/excel.png";

/* Components */
import Selector from "../components/Selector";
import Dropdown from "../components/DropDown";
import DatePicker from "../components/DatePicker";

/* Constants */
import { categoryOption, projectTypeOption, regionOptions, langOptions, statusOptions, priorityOption } from "../constants/projecttasks";

/* Redux */
import { _saveProjectData } from "../utils/onGoingTaskSlice";
import { useDispatch } from "react-redux";

const EditProjectDetails = ({data, onClose}) => {
  const { id, manuscript, description, author, branch, category, projectType, region, language, reviewPeriod, budget, lastUpdated, publishOn, status, priority, urgency, open, onPriority, editorNotes, instructions } = data;
  const [manuscriptText, setmanuscriptText] = useState(manuscript);
  const [descriptionText, setdescriptionText] = useState(description);
  const [branchText, setbranchText] = useState(branch);
  const [reviewPeriodText, setreviewPeriodText] = useState(reviewPeriod);
  const [budgetText, setbudgetText] = useState(budget);
  const [editorNotesText, seteditorNotesText] = useState(editorNotes);
  const [instructionsText, setinstructionsText] = useState(instructions);
  const [urgencyCheck, setUrgency] =useState(urgency);
  const [openCheck, setOpen] =useState(open);
  const [priorityCheck, setPriority] =useState(onPriority);
  const dispatch = useDispatch();

  const renderHeader = () => {
    return (
      <div className="header-wrap">
        <div className="header-left">
          <div className="back-icon">
              <img className="back-icon" style={{cursor: "pointer"}} src={leftarrow} alt="leftarrow" onClick={() => onClose()} />
          </div>
          <div className="edit-title">Edit Project details</div>
        </div>
        <button className="export-btn">Export to excel<img className="excel-icon" src={excel} alt="excel" /></button>
      </div>
    );
  };

  const renderManuscriptInfo = () => {
    return (
      <div className="edit-container">
        <div className="edit-container-title">Manuscript Information</div>
        <div className="edit-container-subtitle">Manuscript Name</div>
        <textarea className="manuscript-input" type="text" value={manuscriptText} onChange={(event) => setmanuscriptText(event.target.value)} />
        <div className="edit-container-subtitle">Description</div>
        <textarea className="description-input" type="text" value={descriptionText} onChange={(event) => setdescriptionText(event.target.value)} />
        <div className="other-fields">
          <div className="author-input">
            <div className="edit-container-subtitle">Author</div>
            <Selector value={author} />
          </div>
          <div>
            <div className="edit-container-subtitle">Branch</div>
            <textarea className="branch-input" type="text" value={branchText} onChange={(event) => setbranchText(event.target.value)} />
          </div>
        </div>
      </div>
    );
  };

  const renderProjectDetails = () => {
    return (
      <div className="edit-container">
        <div className="edit-container-title">Project Details</div>
        <div className="project-details-wrap">
          <div>
            <div className="edit-container-subtitle">Category</div>
            <Dropdown value={category} options={categoryOption} />
          </div>
          <div>
            <div className="edit-container-subtitle">Project type</div>
            <Dropdown value={projectType} options={projectTypeOption} />
          </div>
          <div>
            <div className="edit-container-subtitle">Region</div>
            <Dropdown value={region} options={regionOptions} />
          </div>
          <div>
            <div className="edit-container-subtitle">Language</div>
            <Dropdown value={language} options={langOptions} />
          </div>
          <div>
            <div className="edit-container-subtitle">Review Period</div>
            <textarea className="branch-input" type="text" value={reviewPeriodText} onChange={(event) => setreviewPeriodText(event.target.value)} />
          </div>
          <div>
            <div className="edit-container-subtitle">Budget</div>
            <textarea className="budget-input" type="text" value={budgetText} onChange={(event) => setbudgetText(event.target.value)} />
          </div>
        </div>
      </div>
    );
  };

  const renderStatusandDates = () => {
    return (
      <div className="edit-container">
        <div className="edit-container-title">Status & Dates</div>
        <div className="status-date-wrap">
          <div>
            <div className="edit-container-subtitle">Due On</div>
            <DatePicker value={lastUpdated} />
          </div>
          <div>
            <div className="edit-container-subtitle">Publish On</div>
            <DatePicker value={publishOn} />
          </div>
          <div>
            <div className="edit-container-subtitle">Status Update</div>
            <Dropdown value={status} options={statusOptions} />
          </div>
          <div>
            <div className="edit-container-subtitle">Priority</div>
            <Dropdown value={priority} options={priorityOption} />
          </div>
        </div>
      </div>
    );
  };

  const radioBtn = (label, checked, setState) => {
    return (
        <div className="radio-group">
          <label className="group-label">{label}</label>
          <div className="edit-options">
            <label className="radio-option">
              <input type="radio" name={label} value="yes" checked={checked} onChange={() => setState(!checked)} />
              <span>Yes</span>
            </label>
            <label className="radio-option">
              <input type="radio" name={label} value="no" checked={!checked} onChange={() => setState(!checked)} />
              <span>No</span>
            </label>
          </div>
        </div>
    );
  };

  const renderAdditionalOptions = () => {
    return (
      <div className="edit-container">
        <div className="edit-container-title">Additional Options</div>
        <div className="additional-content">
          <div className="radio-content">
            {radioBtn("Urgency", urgencyCheck, setUrgency)}
            {radioBtn("Open Source", openCheck, setOpen)}
          </div>
          <div className="checkbox-wrap">
            <input id="priority-task" type="checkbox" className="check-box" checked={priorityCheck} onChange={() => setPriority(!priorityCheck)} />
            <label className="checkbox-label">Priority task</label>
          </div>
        </div>
      </div>
    );
  };

  const renderEditorNotes = () => {
    return (
      <div className="edit-container">
        <div className="edit-container-title">Editor Notes</div>
        <div className="edit-container-subtitle">Notes</div>
        <textarea className="notes-input" type="text" value={editorNotesText} onChange={(event) => seteditorNotesText(event.target.value)} />
      </div>
    );
  };

  const renderInstructions = () => {
    return (
      <div className="edit-container">
        <div className="edit-container-title">Instructions</div>
        <div className="edit-container-subtitle">Instructions</div>
        <textarea className="instruction-input" type="text" value={instructionsText} onChange={(event) => setinstructionsText(event.target.value)} />
      </div>
    );
  };

  const renderBody = () => {
    return (
      <>
        {renderManuscriptInfo()}
        {renderProjectDetails()}
        {renderStatusandDates()}
        {renderAdditionalOptions()}
        {renderEditorNotes()}
        {renderInstructions()}
      </>
    );
  };

  const saveData = () => {
    const newData = {
        id: id,
        manuscript: manuscriptText,
        description: descriptionText,
        author: author,
        branch: branchText,
        category: category,
        projectType: projectType,
        region: region,
        language: language,
        reviewPeriod: reviewPeriodText,
        budget: budgetText,
        lastUpdated: lastUpdated,
        publishOn: publishOn,
        status: status,
        priority: priority,
        urgency: urgencyCheck,
        open: openCheck,
        onPriority: priorityCheck,
        editorNotes: editorNotesText,
        instructions: instructionsText
    };
    dispatch(_saveProjectData(newData));
    onClose();
  }

  const renderFooter = () => {
    return (
      <div className="footer-wrap"> 
        <button className="cancel-btn" onClick={() => onClose()}>Cancel</button>
        <button className="save-btn" onClick={() => saveData()}>Save</button>
      </div>
    );
  };

  return (
    <div className="edit-page">
      {renderHeader()}
      {renderBody()}
      {renderFooter()}
    </div>
  );
};

export default EditProjectDetails;