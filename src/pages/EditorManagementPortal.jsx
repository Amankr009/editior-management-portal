import React, { useState } from "react";

/* Styles */
import "../styles/editor-management-portal.scss";

/* Components */
import OptionsSelector from "../components/OptionSelector";
import CompletedArticles from "../components/CompletedArticles";
import ManuscriptStatus from "../components/ManuscriptStatus";
import CompletedIssues from "../components/CompletedIssues";
import OngoingTaskList from "../components/OngoingTaskList";
import ProjectTasksList from "../components/ProjectTasksList";
import TaskActions from "../components/TaskActions";

/* Constants */
import { basicOptions, otherOptions } from "../constants/nav";
import { userName } from "../constants/user";
import { completedArticlesData, manuscriptStatusData, completeIssuesData } from "../constants/chart";

/* Redux */
import { useSelector } from "react-redux";
import EditProjectDetails from "./EditProjectDetails";

const EditorManagementPortal = () => {
  const [modal, setModal] = useState(false);
  const [editDetails, setEditDetails] = useState(false);
  const ongoingTaskDataList = useSelector((store) => store.onGoingTask.onGoingTaskList);
  const projectTaskDataList = useSelector((store) => store.onGoingTask.projectTask);
  const editData = useSelector((store) => store.onGoingTask.editData);

  const handleNav = (navTo) => {
    switch(navTo){
      case "dashboard": {
        setEditDetails(false);
        break;
      };
    }
  };

  const renderOptions = (options) => {
    return (
      <div>
        {options.map((item) => <OptionsSelector
          key={item?.id}
          name={item?.name}
          handleClick={() => item?.naveTo && handleNav(item?.naveTo)} 
        />)}
      </div>
    );
  };
  
  const renderNavigation = () => {
    return (
      <div className="left-section">
        <div className="title">Editor Management Portal</div>
        <div className="sub-title">Text</div>
        {basicOptions && renderOptions(basicOptions)}
        <div className="seperator" />
        {otherOptions && renderOptions(otherOptions)}
      </div>
    );
  };

  const renderChart = () => {
    return (
      <div className="chart-wrap">
        <CompletedArticles data={completedArticlesData} />
        <ManuscriptStatus data={manuscriptStatusData} />
        <CompletedIssues data={completeIssuesData} />
      </div>
    );
  };

  const handleClick = () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
    
  };

  const openEdit = () => setEditDetails(true);
  const closeEdit = () => setEditDetails(false);

  const renderBody = () => {
    return (
      <div className="body-wrap">
        <div className="user-name">Hi {userName}!</div>
        {renderChart()}
        <OngoingTaskList ongoingTaskData={ongoingTaskDataList} handleClick={() => handleClick()} />
        <ProjectTasksList projectTaskData={projectTaskDataList} handleClick={() => openEdit()} />
      </div>
    );
  };

  const renderEdit = () => {
    return (
      <EditProjectDetails data={editData} onClose={() => closeEdit()} />
    );
  }

  return (
    <div className="container-wrap">
      {renderNavigation()}
      {editDetails ? renderEdit() : renderBody()}
      {modal && <TaskActions data={editData} onClose={() => handleClose()} />}
    </div>
  );
};

export default EditorManagementPortal;