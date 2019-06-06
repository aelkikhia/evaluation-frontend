import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from "./authReducer";
import diffReducer from "./diffReducer";

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    diffs: diffReducer
});