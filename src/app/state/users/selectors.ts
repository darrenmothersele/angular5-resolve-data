import {getUsersState} from '../reducers';
import {userAdapter} from './reducer';
import {createSelector} from '@ngrx/store';

export const {
    selectAll: getUsers,
    selectEntities: selectUserEntities
} = userAdapter.getSelectors(getUsersState);

export const getSelectedUserId = createSelector(
    getUsersState,
    ({ selectedUserId }) => selectedUserId
);

export const getSelectedUser = createSelector(
    selectUserEntities,
    getSelectedUserId,
    (entities, selectedId) => selectedId && entities[selectedId]
);

export const getIsSelectedNotLoaded = createSelector(
    getUsersState,
    ({ detailLoadedIds, selectedUserId }) => !detailLoadedIds.includes(selectedUserId)
);
