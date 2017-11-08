import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {User} from "../../../model/user.model";
import * as actions from '../actions/user.actions';
import {createFeatureSelector} from "@ngrx/store";

export const userAdapter = createEntityAdapter<Partial<User>>();
export interface State extends EntityState<Partial<User>> {
    selectedUserId: number;
}

const initialState: State = userAdapter.getInitialState({
    selectedUserId: null
});

export function reducer(state: State = initialState, action: actions.UserActions) {

    switch (action.type) {

        case actions.ADD:
            return userAdapter.addOne(action.payload, state);

        case actions.UPDATE:
            return userAdapter.updateOne({
                id: action.id,
                changes: action.payload
            }, state);

        case actions.LOAD_SUMMARY_SUCCESS:
            return userAdapter.addMany(action.users, state);

        case actions.LOAD_DETAIL:
            return { ...state, selectedUserId: action.id };

        case actions.LOAD_DETAIL_SUCCESS:
            if (!!state.entities[action.user.id]) {
                return userAdapter.updateOne({
                    id: action.user.id,
                    changes: action.user
                }, state);
            }
            return userAdapter.addOne(action.user, state);

        default:
            return state;
    }
}

export const getSelectedId = (state: State) => {
    console.log({state});
    return state.selectedUserId;
};


