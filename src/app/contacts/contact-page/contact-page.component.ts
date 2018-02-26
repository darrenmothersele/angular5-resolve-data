import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../../model/user.model';
import {Store} from '@ngrx/store';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import {ActivatedRoute} from '@angular/router';
import {AppState, getIsSelectedNotLoaded, getSelectedUser} from '../../state';
import {UserActions} from '../../state/users/actions';

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

    /* container component */

    user$: Observable<Partial<User>>;
    isPartial$: Observable<boolean>;

    constructor(
        private store: Store<AppState>,
        route: ActivatedRoute
    ) {
        route.params.subscribe(({ id }) => {
            store.dispatch(UserActions.loadDetail({ id }));
        });
    }

    ngOnInit() {
        this.user$ = this.store.select(getSelectedUser);
        this.isPartial$ = this.store.select(getIsSelectedNotLoaded);
    }
}
