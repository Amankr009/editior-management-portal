import React from "react";

/* Components */
import HeaderWithSearch from "./HeaderWithSearch";
import Table from "./Table";

/* Constants */
import { projectTasksColumns } from "../constants/projecttasks";

const ProjectTasksList = ({projectTaskData, handleClick}) => {
  return(
    <div>
      <HeaderWithSearch title={"Project Tasks"} />
      <Table source="ProjectTasksList" columns={projectTasksColumns} columnData={projectTaskData} handleClick={() => handleClick()} />
    </div>
  );
};

export default ProjectTasksList;