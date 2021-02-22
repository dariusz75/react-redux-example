import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";

import MainHeader from "../MainHeader";
import ModalWindow from "../ModalWindow";
import { fetchJobs } from "../../reduxDariusz/jobsRedux";
import {
  setAddJobButton,
  removeButton,
  setJobId,
} from "../../reduxDariusz/buttonsRedux";

const Jobs = (props) => {
  const { jobs, fetchJobs, setAddJobButton, removeButton, setJobId } = props;

  useEffect(() => {
    if (jobs.length === 0) {
      fetchJobs();
    }
  }, [fetchJobs, jobs]);

  useEffect(() => {
    setAddJobButton();
    return () => {
      removeButton();
    };
  }, [removeButton, setAddJobButton]);

  return (
    <>
      <MainHeader title="Jobs" />
      <ModalWindow />
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title </th>
              <th scope="col">Expiry Date</th>
              <th scope="col">total Applications</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => {
              const { id, jobTitle, expiryDate, totalApplicants } = job;
              return (
                <tr key={id}>
                  <th scope="row">{id}</th>
                  <td>
                    <Link
                      style={{ color: "blue" }}
                      to={`/application/${jobTitle}/${id}`}
                      onClick={() => setJobId(id)}
                    >
                      {jobTitle}
                    </Link>
                  </td>
                  <td>{moment(expiryDate).format("DD/MM/YYYY")}</td>
                  <td>{totalApplicants}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs.jobs,
    isLoading: state.jobs.isLoading,
    isError: state.jobs.isError,
    showButton: state.button.isDisplayed,
    buttonTitle: state.button.title,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchJobs: () => dispatch(fetchJobs()),
    setAddJobButton: () => dispatch(setAddJobButton()),
    removeButton: () => dispatch(removeButton()),
    setJobId: (id) => dispatch(setJobId(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);
