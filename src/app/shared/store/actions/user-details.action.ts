import {Action} from "@ngrx/store";

import {User} from "../../../model/user.model";

export const LOAD = '[User details] load';
export const LOAD_SUCCESS = '[User details] load success';
export const LOAD_FAILURE = '[User details] load failure';

export class LoadAction implements Action {
    readonly type = LOAD;
    constructor(public id: number) {}
}

export class LoadSuccessAction implements Action {
    readonly type = LOAD_SUCCESS;
    constructor(public payload: User) {}
}

export class LoadFailureAction implements Action {
    readonly type = LOAD_FAILURE;
}

export type Actions
    = LoadAction
    | LoadSuccessAction
    | LoadFailureAction;
