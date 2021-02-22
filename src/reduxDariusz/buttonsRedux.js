const SHOW_BUTTON = "SHOW_BUTTON";
const REMOVE_BUTTON = "REMOVE_BUTTON";
const ADD_TITLE = "ADD_TITLE";
const REMOVE_TITLE = "REMOVE_TITLE";
const ADD_JOB_ID = "ADD_JOB_ID";
const REMOVE_JOB_ID = "REMOVE_JOB_ID";

export const showButton = (data) => {
  return { type: SHOW_BUTTON, payload: data };
};

export const removeButton = () => {
  return { type: REMOVE_BUTTON };
};

export const addTitle = (data) => {
  return { type: ADD_TITLE, payload: data };
};

export const removeTitle = (data) => {
  return { type: REMOVE_TITLE, payload: data };
};

export const addJobId = (data) => {
  return { type: ADD_JOB_ID, payload: data };
};

export const removeJobId = () => {
  return { type: REMOVE_JOB_ID };
};

const INITIAL_STATE = {
  title: "",
  isDisplayed: false,
  jobId: 0,
  jobTitle: "",
};

export const setAddJobButton = () => {
  return function (dispatch) {
    dispatch(showButton({ title: "ADD JOB" }));
  };
};

export const setAddCandidateButton = () => {
  return function (dispatch) {
    dispatch(showButton({ title: "ADD CANDIDATE" }));
  };
};

export const setJobId = (id) => {
  return function (dispatch) {
    dispatch(addJobId({ id }));
  };
};

const buttonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_BUTTON:
      return {
        ...state,
        title: action.payload.title,
        isDisplayed: true,
      };
    case REMOVE_BUTTON:
      return {
        ...state,
        title: "",
        isDisplayed: false,
      };
    case ADD_JOB_ID:
      return {
        ...state,
        jobId: action.payload.id,
      };
    default:
      return state;
  }
};

export default buttonReducer;
