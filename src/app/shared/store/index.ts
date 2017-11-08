import {createSelector} from "@ngrx/store";

import * as fromUsers from './reducers/users.reducer';
import * as fromUserDetails from './reducers/user-details.reducer';

export interface State {
    users: fromUsers.State;
    userDetail: fromUserDetails.State;
}

export const reducers = {
    users: fromUsers.reducer,
    userDetail: fromUserDetails.reducer
};

export const getUsersState   = (state: State) => state.users;
export const getUsers  = createSelector(getUsersState, fromUsers.getUsers);
export const getUsersLoading  = createSelector(getUsersState, fromUsers.getLoading);
export const getUsersFailed  = createSelector(getUsersState, fromUsers.getFailed);

export const getUserDetailsState   = (state: State) => state.userDetail;
export const getUserDetails  = createSelector(getUserDetailsState, fromUserDetails.getUser);
export const getUserDetailsLoading  = createSelector(getUserDetailsState, fromUserDetails.getLoading);
export const getUserDetailsFailed  = createSelector(getUserDetailsState, fromUserDetails.getFailed);
