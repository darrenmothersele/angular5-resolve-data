import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user.model';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {AppState, getUsers} from '../../state';
import {UserActions} from '../../state/users/actions';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

    /* Container component */

    users$: Observable<Partial<User>[]>;

    constructor(private store: Store<AppState>) {}

    ngOnInit() {
        this.users$ = this.store.select(getUsers);
        this.store.dispatch(UserActions.loadSummary({}));
    }
}
