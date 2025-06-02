import { createSlice } from "@reduxjs/toolkit";
import { ongoingTaskData } from "../constants/ongoingTask";
import { projectTaskData } from "../constants/projecttasks";

const onGoingTaskReducer = createSlice({
  name: "onGoingTask",
  initialState: {
    onGoingTaskList: ongoingTaskData,
    projectTask: projectTaskData
  },
  reducers: {
    _editData: (state, action) => {
      state.editData = action.payload;
    },
    _removeId: (state) => {
      state.editId = undefined;
    },
    _saveProjectData: (state, action) => {
      let newData = action.payload;

      state.projectTask = state.projectTask.map(item =>
        item.id === newData.id ? { ...item, ...newData } : item
      ); 
    }
  }
});

export const { _editData, _removeId, _saveProjectData } = onGoingTaskReducer.actions;
export default onGoingTaskReducer.reducer;