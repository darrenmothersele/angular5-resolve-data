import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {Observable} from "rxjs/Observable";
import {Action} from "@ngrx/store";

import * as userActions from '../actions/users.actions';
import {UserService} from "../../user.service";

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

@Injectable()
export class UsersEffect {

    constructor(
        private actions$: Actions,
        private userService: UserService
    ) {}

    @Effect()
    loadUsers$: Observable<Action> = this.actions$
        .ofType(userActions.LOAD)
        .switchMap(() => {
            return this.userService.getUsers()
                .mergeMap(users => [
                    new userActions.LoadSuccessAction(users)
                ])
                .catch(error => Observable.of(new userActions.LoadFailureAction()));
        });

}
