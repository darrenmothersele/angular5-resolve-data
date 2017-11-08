import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {Observable} from "rxjs/Observable";
import {Action} from "@ngrx/store";

import {UserService} from "../../user.service";
import * as userDetailsActions from '../actions/user-details.action';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class UserDetailsEffect {

    constructor(
        private actions$: Actions,
        private userService: UserService
    ) {}


    @Effect()
    loadUser$: Observable<Action> = this.actions$
        .ofType(userDetailsActions.LOAD)
        .map((action: userDetailsActions.LoadAction) => action.id)
        .switchMap(id => {
           return this.userService.getUser(id)
               .mergeMap(user => [
                   new userDetailsActions.LoadSuccessAction(user)
               ])
               .catch(error => Observable.of(
                   new userDetailsActions.LoadFailureAction()
               ));
        });

}
