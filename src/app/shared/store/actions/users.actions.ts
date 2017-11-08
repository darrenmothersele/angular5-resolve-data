import {Action} from "@ngrx/store";
import {User} from "../../../model/user.model";

export const LOAD = '[Users] load';
export const LOAD_SUCCESS = '[Users] load success';
export const LOAD_FAILURE = '[Users] load failure';

export class LoadAction implements Action {
    readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
    readonly type = LOAD_SUCCESS;
    constructor(public payload: Partial<User>[]) {}
}

export class LoadFailureAction implements Action {
    readonly type = LOAD_FAILURE;
}

export type Actions
    = LoadAction
    | LoadSuccessAction
    | LoadFailureAction;
