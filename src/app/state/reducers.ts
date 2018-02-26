import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {usersReducer, UsersState} from './users/reducer';


export interface AppState {
    users: UsersState;
}

export const reducers: ActionReducerMap<AppState> = {
    users: usersReducer
};

export const getUsersState = createFeatureSelector('users');


