import { createSlice } from "@reduxjs/toolkit";
import { projectTaskData } from "../constants/projecttasks";

const projectTasksReducer = createSlice({
  name: "onGoingTask",
  initialState: {
    projectTask: projectTaskData
  }
});

export default projectTasksReducer.reducer;