import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user.model";
import {UserService} from "../../shared/user.service";
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";

import * as fromStore from '../../shared/store';
import * as userActions from '../../shared/store/actions/user.actions';

import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

    /* Container component */

    users$: Observable<Partial<User>[]>;

    constructor(private store: Store<fromStore.State>) {
        this.users$ = store.select(fromStore.selectAll);
    }

    ngOnInit() {
        this.store.dispatch(new userActions.LoadSummaryAction());
    }
}
