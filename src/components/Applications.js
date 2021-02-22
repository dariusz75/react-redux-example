import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  setAddCandidateButton,
  removeButton,
} from "../reduxDariusz/buttonsRedux";

const Applications = (props) => {
  const { setAddCandidateButton, removeButton, jobId, match } = props;

  useEffect(() => {
    if (jobId % 2 === 0) {
      setAddCandidateButton();
    }

    return () => {
      removeButton();
    };
  }, []);
  console.log(props);
  console.log(match);
  return <div>{match.params.jobTitle}</div>;
};

const mapStateToProps = (state) => {
  return {
    showButton: state.button.isDisplayed,
    buttonTitle: state.button.title,
    jobId: state.button.jobId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAddCandidateButton: () => dispatch(setAddCandidateButton()),
    removeButton: () => dispatch(removeButton()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Applications);
