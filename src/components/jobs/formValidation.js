export const validate = (values) => {
  const errors = {};
  if (!values.jobTitle) {
    errors.jobTitle = "Required";
  }
  if (!values.expiryDate) {
    errors.expiryDate = "Required";
  }
  if (!values.totalApplicants) {
    errors.totalApplicants = "Required";
  } else if (
    !/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/i.test(
      values.expiryDate
    )
  ) {
    errors.expiryDate = "Invalid data format (dd/mm/yyyy)";
  }
  return errors;
};
