// import _ from 'lodash';
import { FETCH_DIFF } from "../actions/types";

const INITIAL_STATE = {
    history: []

};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_DIFF:
            return { ...state, 'history': [...state.history, action.payload] };
        default:
            return state;
    }
}

