import React from "react";

/* Components */
import HeaderWithSearch from "./HeaderWithSearch";
import Table from "./Table";

/* Constants */
import { ongoingTaskColumn } from "../constants/ongoingTask";

const OngoingTaskList = ({ongoingTaskData, handleClick}) => {
  return(
    <div>
      <HeaderWithSearch title={"Ongoing Tasks"} />
      <Table source="OngoingTaskList" columns={ongoingTaskColumn} columnData={ongoingTaskData} handleClick={() => handleClick()} />
    </div>
  );
};

export default OngoingTaskList;