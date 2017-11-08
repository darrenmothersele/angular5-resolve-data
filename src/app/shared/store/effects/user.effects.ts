import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {Observable} from "rxjs/Observable";
import {Action} from "@ngrx/store";

import * as userActions from '../actions/user.actions';
import {UserService} from "../../user.service";

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class UserEffects {

    constructor(
        private actions$: Actions,
        private userService: UserService
    ) {}

    @Effect()
    loadSummary$: Observable<Action> = this.actions$
        .ofType(userActions.LOAD_SUMMARY)
        .switchMap(() => this.userService.getUsers()
            .mergeMap(users => [
                new userActions.LoadSummarySuccessAction(users)
            ]));

    @Effect()
    loadDetail$: Observable<Action> = this.actions$
        .ofType<userActions.LoadDetailAction>(userActions.LOAD_DETAIL)
        .map(action => action.id)
        .switchMap(id => this.userService.getUser(id)
            .mergeMap(user => [
                new userActions.LoadDetailSuccessAction(user)
            ]));
}
