const SHOW_MODAL = "SHOW_MODAL";
const HIDE_MODAL = "HIDE_MODAL";

const INITIAL_STATE = {
  isModalDisplayed: false,
};

export const showModal = () => {
  return { type: SHOW_MODAL };
};

export const hideModal = () => {
  return { type: HIDE_MODAL };
};

export const setShowModal = () => {
  return function (dispatch) {
    dispatch(showModal());
  };
};

export const setHideModal = () => {
  return function (dispatch) {
    dispatch(hideModal());
  };
};

export const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        isModalDisplayed: true,
      };
    case HIDE_MODAL:
      return {
        ...state,
        isModalDisplayed: false,
      };
    default:
      return state;
  }
};

export default modalReducer;
