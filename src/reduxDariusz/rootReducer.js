import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";

import jobsReducer from "./jobsRedux";
import buttonReducer from "./buttonsRedux";
import modalReducer from "./modalRedux";

const rootReducer = combineReducers({
  jobs: jobsReducer,
  button: buttonReducer,
  modal: modalReducer,
  form: FormReducer,
});

export default rootReducer;
