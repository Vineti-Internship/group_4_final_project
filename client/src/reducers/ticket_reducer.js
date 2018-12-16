import * as actionTypes from "../actions/types";

const initialUserState = {
  error:""
};


export default (state = initialUserState, action) => {
  console.log(action.payload)
	switch(action.type){
    case actionTypes.BUY_TICKET:
			return {...state, error:action.payload}
    default:
      return state;
	}
};