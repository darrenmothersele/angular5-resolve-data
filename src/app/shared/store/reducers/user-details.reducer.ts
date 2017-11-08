
import {User} from "../../../model/user.model";

import * as actions from '../actions/user-details.action';

export interface State {
    loading: boolean;
    failed: boolean;
    user: User;
}

const initialState: State = {
    loading: false,
    failed: false,
    user: null
};

export function reducer(state = initialState, action: actions.Actions): State {
    if (!action) {
        return state;
    }

    switch (action.type) {

        case actions.LOAD:
            return { ...state, user: null, loading: true };

        case actions.LOAD_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false,
                failed: false
            };

        case actions.LOAD_FAILURE:
            return {
                ...state,
                user: null,
                loading: false,
                failed: true
            };

        default:
            return state;
    }
}

export const getUser = (state: State) => state.user;
export const getLoading = (state: State) => state.loading;
export const getFailed = (state: State) => state.failed;
