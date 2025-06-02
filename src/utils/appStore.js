import { configureStore } from "@reduxjs/toolkit";
import onGoingTaskReducer from "./onGoingTaskSlice";
import projectTasksReducer from "./projectTasksSlice";

const appStore = configureStore({
  reducer: {
    onGoingTask: onGoingTaskReducer,
    projectTask: projectTasksReducer,
  }
});

export default appStore;