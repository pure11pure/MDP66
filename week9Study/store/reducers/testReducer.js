import { INC_COUNTER } from "../actions/testAction";

const initialState = {
  counter: 0,
  name: "KMITL",
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case INC_COUNTER:
      return { counter: state.counter + 1, name: action.myname };
    default:
      return state;
  }
};

export default testReducer;
