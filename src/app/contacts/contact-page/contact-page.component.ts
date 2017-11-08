import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {User} from "../../model/user.model";
import {Store} from "@ngrx/store";

import * as fromStore from '../../shared/store';
import * as userDetailsActions from '../../shared/store/actions/user-details.action';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

    /* container component */

    user$: Observable<User>;

    constructor(
        private store: Store<fromStore.State>,
        route: ActivatedRoute
    ) {
        this.user$ = store.select(fromStore.getUserDetails);
        route.params.subscribe(({ id }) => {
            store.dispatch(new userDetailsActions.LoadAction(+id))
        });
    }

    ngOnInit() {
    }
}
