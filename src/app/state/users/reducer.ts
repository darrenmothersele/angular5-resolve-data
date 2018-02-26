import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {User} from '../../model/user.model';
import * as R from 'ramda';
import {UserActions, UserActionsType} from './actions';

export const userAdapter = createEntityAdapter<Partial<User>>();
export interface UsersState extends EntityState<Partial<User>> {
    selectedUserId: number;
    detailLoadedIds: number[];
}

const init: UsersState = userAdapter.getInitialState({
    selectedUserId: null,
    detailLoadedIds: []
});

const markAsLoaded = (x, list) => R.uniq(R.append(x, list));

export function usersReducer(state: UsersState = init, action: UserActionsType): UsersState {
    return UserActions.match({

        loadSummarySuccess(users) {
            return userAdapter.addMany(users, state);
        },

        loadDetail({ id: selectedUserId }) {
            return { ...state, selectedUserId };
        },

        loadDetailSuccess(user) {
            const { id } = user;
            const detailLoadedIds = markAsLoaded(id, state.detailLoadedIds);
            if (!!state.entities[id]) {
                return userAdapter.updateOne({id, changes: user},
                    { ...state, detailLoadedIds });
            }
            return userAdapter.addOne(user, { ...state, detailLoadedIds });
        }

    }, () => state)(action);
}
