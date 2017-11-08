import {createFeatureSelector, createSelector} from "@ngrx/store";

import * as fromUser from './reducers/user.reducer';

export interface State {
    users: fromUser.State;
}

export const reducers = {
    users: fromUser.reducer
};


export const getUserState = createFeatureSelector<fromUser.State>('users');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
} = fromUser.userAdapter.getSelectors(getUserState);


export const getSelectedUserId = createSelector(
    getUserState,
    fromUser.getSelectedId
);

export const getSelectedUser = createSelector(
    selectEntities,
    getSelectedUserId,
    (entities, selectedId) => {
        console.log({entities, selectedId});
        return selectedId && entities[selectedId];
    }
);
