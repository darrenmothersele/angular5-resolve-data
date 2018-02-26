import { unionize, ofType } from 'unionize';
import {User} from '../../model/user.model';

export const UserActions = unionize({
    loadSummary: ofType(),
    loadSummarySuccess: ofType<Array<Partial<User>>>(),
    loadDetail: ofType<{ id: number }>(),
    loadDetailSuccess: ofType<User>()
}, 'type', 'payload');

export type UserActionsType = typeof UserActions._Union;
