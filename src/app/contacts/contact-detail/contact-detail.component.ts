import {Component, OnInit} from '@angular/core';
import {UserService} from "../../shared/user.service";
import {User} from "../../model/user.model";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-contact-detail',
    templateUrl: './contact-detail.component.html',
    styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

    user: User;

    constructor(service: UserService, route: ActivatedRoute) {
        route.params.subscribe(({ id }) => {
            service.getUser(id).subscribe(user => {
                this.user = user;
            });
        });
    }

    ngOnInit() {
    }

}
