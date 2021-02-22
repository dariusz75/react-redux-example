import Immutable from "seamless-immutable";

export const initialState = Immutable({
  testState: false,
});

function testReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default testReducer;
