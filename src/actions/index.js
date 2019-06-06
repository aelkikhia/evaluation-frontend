import eval_api from '../apis/eval-api';

import {
    SIGN_IN, SIGN_OUT, FETCH_DIFF
} from "./types";

export const signIn = (userId) => { return { type: SIGN_IN, payload: userId }; };

export const signOut = () => { return { type: SIGN_OUT }; };


export const fetchDiff = (formValues) => async (dispatch, getState) => {
    const current = formValues.current.split(',').map(Number);
    const target = formValues.target.split(',').map(Number);

    const { userId } = getState().auth;
    const response = await eval_api.post('/array-diff',
        { current, target, userId });

    dispatch({
        type: FETCH_DIFF,
        payload: {...response.data, ...{'current': current, 'target': target}} });
};
