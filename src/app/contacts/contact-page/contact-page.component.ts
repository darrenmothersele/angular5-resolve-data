import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {User} from "../../model/user.model";
import {Store} from "@ngrx/store";

import * as fromStore from '../../shared/store';
import * as userActions from '../../shared/store/actions/user.actions';

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

    user$: Observable<Partial<User>>;
    isPartial: boolean = true;

    constructor(
        private store: Store<fromStore.State>,
        route: ActivatedRoute
    ) {
        this.user$ = store.select(fromStore.getSelectedUser);
        store.select(fromStore.getUserDetailLoadedForSelected)
            .subscribe(detailLoaded => this.isPartial = !detailLoaded);

        route.params.subscribe(({ id }) => {
            store.dispatch(new userActions.LoadDetailAction(+id));
        });
    }

    ngOnInit() {
    }
}
