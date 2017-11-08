import {User} from "../../../model/user.model";
import * as actions from '../actions/users.actions';

export interface State {
    loading: boolean;
    failed: boolean;
    users: User[];
}

const initialState: State = {
    loading: false,
    failed: false,
    users: []
};


export function reducer(state = initialState, action: actions.Actions): State {
    if (!action) {
        return state;
    }

    switch (action.type) {

        case actions.LOAD:
            return {
                ...state,
                loading: true
            };

        case actions.LOAD_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loading: false,
                failed: false
            };

        case actions.LOAD_FAILURE:
            return {
                ...state,
                users: [],
                loading: false,
                failed: true
            };

        default:
            return state;
    }
}

export const getUsers = (state: State) => state.users;
export const getLoading = (state: State) => state.loading;
export const getFailed = (state: State) => state.failed;
