import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {UserService} from '../../services/user.service';
import {filter, map, switchMap} from "rxjs/operators";
import {UserActions} from "./actions";
import {User} from "../../model/user.model";


@Injectable()
export class UsersEffects {

    @Effect()
    summary$ = this.actions$.pipe(
        filter(UserActions.is.loadSummary),
        switchMap(() => this.userService.getUsers(),
            (_, users) => UserActions.loadSummarySuccess(users)),
    );

    @Effect()
    detail$ = this.actions$.pipe(
        filter(UserActions.is.loadDetail),
        switchMap(({ payload: { id }}) => this.userService.getUser(id),
            (_, user: User) => UserActions.loadDetailSuccess(user)),
    );

    constructor(private actions$: Actions, private userService: UserService) {}
}
