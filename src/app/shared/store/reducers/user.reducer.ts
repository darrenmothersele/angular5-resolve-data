import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {User} from "../../../model/user.model";
import * as actions from '../actions/user.actions';
import {createFeatureSelector, createSelector} from "@ngrx/store";

import * as R from 'ramda';

export const userAdapter = createEntityAdapter<Partial<User>>();
export interface State extends EntityState<Partial<User>> {
    selectedUserId: number;
    detailLoadedIds: number[];
}

const initialState: State = userAdapter.getInitialState({
    selectedUserId: null,
    detailLoadedIds: []
});

const markAsLoaded = (x, list) => R.uniq(R.append(x, list));


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
            const detailLoadedIds = markAsLoaded(
                action.user.id, state.detailLoadedIds);
            if (!!state.entities[action.user.id]) {
                return userAdapter.updateOne({
                    id: action.user.id,
                    changes: action.user
                }, { ...state, detailLoadedIds });
            }
            return userAdapter.addOne(
                action.user,
                { ...state, detailLoadedIds });

        default:
            return state;
    }
}

export const getSelectedId = (state: State) => state.selectedUserId;
export const getDetailLoadedIds = (state: State) => state.detailLoadedIds;
export const hasDetailLoadedForSelected =
    (state: State) => state.detailLoadedIds.includes(state.selectedUserId);
