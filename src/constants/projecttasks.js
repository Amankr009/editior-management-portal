export const projectTasksColumns = [
  {
    col: "Task",
    width: 196,
    align: "left",
    colKey: "task"
  },
  {
    col: "Assigned to",
    width: 224,
    align: "left",
    colKey: "assignedTo"
  },
  {
    col: "Author",
    width: 196,
    align: "left",
    colKey: "author"
  },
  {
    col: "Due on",
    width: 196,
    align: "left",
    colKey: "lastUpdated"
  },
  {
    col: "Priority",
    width: 112,
    align: "left",
    colKey: "status"
  },
  {
    col: "Edit",
    width: 72,
    align: "right"
  }
];

export const categoryOption = ["Content Review", "Content Publish"];

export const projectTypeOption = ["Project Submission", "Project Handover", "Project Abort"];

export const regionOptions = [
  "Africa",
  "Asia",
  "Europe",
  "North America",
  "South America",
  "Australia",
  "Antarctica"
];

export const langOptions = ["English", "Hindi"];

export const statusOptions = ["Under Review", "Approved", "Declined", "To do", "Completed", "High"];

export const priorityOption = ["Low", "Medium", "High", "Critical"];

export const projectTaskData  = [
  {
    id: 1,
    task: "Content Review",
    assignedTo: "John Kulkarni",
    author: "Sarah Johnson",
    lastUpdated: "March 25, 2025",
    publishOn: "March 01, 2025",
    status: "High",
    manuscript: "World and Natural Resources1",
    description: "A detailed information of Natural Resources and their exploitation1",
    branch: "Biotechnology",
    category: "Content Review",
    projectType: "Project Submission",
    region: "Asia",
    language: "Hindi",
    reviewPeriod: "3 months",
    budget: "$3000",
    priority: "Low",
    urgency: false,
    open: true,
    onPriority: false,
    editorNotes: "Get it refined from vocabulary point of view 1",
    instructions: "Request on priority 1"
  },
  {
    id: 2,
    task: "Manuscript Screening",
    assignedTo: "John Kulkarni",
    author: "Sarah Johnson",
    lastUpdated: "March 26, 2025",
    publishOn: "March 01, 2025",
    status: "To do",
    manuscript: "World and Natural Resources2",
    description: "A detailed information of Natural Resources and their exploitation2",
    branch: "Computer Science",
    category: "Content Publish",
    projectType: "Project Handover",
    region: "Europe",
    language: "English",
    reviewPeriod: "1 month",
    budget: "$4000",
    priority: "High",
    urgency: true,
    open: true,
    onPriority: true,
    editorNotes: "Get it refined from vocabulary point of view 2",
    instructions: "Request on priority 1"
  },
  {
    id: 3,
    task: "PRA",
    assignedTo: "John Kulkarni",
    author: "Sarah Johnson",
    lastUpdated: "March 27, 2025",
    publishOn: "March 01, 2025",
    status: "Completed",
    manuscript: "World and Natural Resources3",
    description: "A detailed information of Natural Resources and their exploitation3",
    branch: "Information Technology",
    category: "Content Review",
    projectType: "Project Abort",
    region: "Antarctica",
    language: "English",
    reviewPeriod: "2 months",
    budget: "$5000",
    priority: "Medium",
    urgency: true,
    open: false,
    onPriority: true,
    editorNotes: "Get it refined from vocabulary point of view 3",
    instructions: "Request on priority 1"
  }
];
