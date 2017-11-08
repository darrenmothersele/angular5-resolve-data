import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {User} from "../../model/user.model";
import {ActivatedRoute} from "@angular/router";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

    /* container component */

    user$: Observable<User>;

    constructor(route: ActivatedRoute) {
        this.user$ = route.data
            .map(({ user }) => user);
    }

    ngOnInit() {
    }
}
