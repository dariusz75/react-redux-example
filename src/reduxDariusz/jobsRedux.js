//Actions
const FETCH_JOBS_REQUESTED = "FETCH_JOBS_REQUESTED";
const FETCH_JOBS_SUCCEEDED = "FETCH_JOBS_SUCCEEDED";
const FETCH_JOBS_FAILED = "FETCH_JOBS_FAILED";
const ADD_JOB = "ADD_JOB";

//Initial state
const INITIAL_STATE = {
  jobs: [],
  isLoading: false,
  isError: false,
};

//Action creators
export const fetchRequested = () => {
  return { type: FETCH_JOBS_REQUESTED };
};

export const fetchSucceeded = (data) => {
  return { type: FETCH_JOBS_SUCCEEDED, payload: data };
};

export const fetchFailed = () => {
  return { type: FETCH_JOBS_FAILED };
};

export const addJobRequested = (data) => {
  return { type: ADD_JOB, payload: data };
};

//Methods
export const fetchJobs = () => {
  return function (dispatch) {
    dispatch(fetchRequested());
    fetch("http://localhost:5000/jobs")
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchSucceeded(data));
      })
      .catch((error) => {
        dispatch(fetchFailed());
      });
  };
};

export const addJob = (data) => {
  return function (dispatch) {
    dispatch(addJobRequested(data));
  };
};

//Reducers
const jobsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_JOBS_REQUESTED:
      return { ...state, isLoading: true, isError: false };
    case FETCH_JOBS_SUCCEEDED:
      return {
        ...state,
        jobs: action.payload,
        isLoading: false,
        isError: false,
      };
    case FETCH_JOBS_FAILED:
      return { ...state, isLoading: false, isError: true };
    case ADD_JOB:
      return {
        ...state,
        jobs: action.payload,
      };
    default:
      return state;
  }
};

export default jobsReducer;
