import { connect } from "react-redux";

import React from "react";
import Modal from "react-modal";
import AddJob from "./jobs/AddJob";

import { setHideModal } from "../reduxDariusz/modalRedux";
import { addJob } from "../reduxDariusz/jobsRedux";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ModalWindow = (props) => {
  const { showModal, setHideModal, addJob, jobs } = props;

  const handleSubmit = (values) => {
    const id = { id: jobs.length + 1 };
    const newJob = [{ ...id, ...values }];
    const newJobs = [...jobs, ...newJob];

    addJob(newJobs);
    setHideModal();
  };

  return (
    <div>
      <Modal
        isOpen={showModal}
        onRequestClose={setHideModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={setHideModal}>x</button>
        <AddJob onSubmit={handleSubmit} />
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    showModal: state.modal.isModalDisplayed,
    jobs: state.jobs.jobs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setHideModal: () => dispatch(setHideModal()),
    addJob: (data) => dispatch(addJob(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);
