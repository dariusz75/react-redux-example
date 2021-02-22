import React from "react";
import { Field, reduxForm } from "redux-form";

import { validate } from "./formValidation";

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

let AddJob = (props) => {
  const { handleSubmit } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <Field
            label="Job Title"
            name="jobTitle"
            component={renderField}
            type="text"
          />
        </div>
        <div className="form-group">
          <Field
            label="Expiry date"
            name="expiryDate"
            component={renderField}
            type="text"
          />
        </div>
        <div className="form-group">
          <Field
            label="Total Applicants"
            name="totalApplicants"
            component={renderField}
            type="number"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

AddJob = reduxForm({
  // a unique name for the form
  form: "addJob",
  validate: validate,
})(AddJob);

export default AddJob;
