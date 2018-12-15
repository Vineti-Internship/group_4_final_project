import * as actionTypes from "../actions/types";

const initialUserState = {
  user: {}
}
export default (state = initialUserState, action) => {
	switch(action.type){
		case actionTypes.GET_USER:
			return {...state, user: action.payload};
		default:
			return state;
	}
};