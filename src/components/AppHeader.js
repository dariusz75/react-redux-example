import { connect } from "react-redux";

import { setShowModal } from "../reduxDariusz/modalRedux";

const AppHeader = (props) => {
  const { showButton, buttonTitle, jobId, setShowModal } = props;
  console.log("jobId is", jobId);
  return (
    <div className="w-100 bg-light pl-4">
      {showButton && (
        <button
          type="button"
          className="btn btn-primary"
          onClick={buttonTitle === "ADD JOB" ? () => setShowModal() : null}
        >
          {buttonTitle}
        </button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    showButton: state.button.isDisplayed,
    buttonTitle: state.button.title,
    jobId: state.button.jobId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { setShowModal: () => dispatch(setShowModal()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
