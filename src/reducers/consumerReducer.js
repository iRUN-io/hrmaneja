import {
    CONTACT
  } from "./../actions/types";
  
  const INITIAL_STATE = {
    loading: false,
    response: null
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case CONTACT:
        return { ...state, loading: false, response: action.payload };
      default:
        return state;
    }
  };
  