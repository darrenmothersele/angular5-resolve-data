import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user.model";
import {UserService} from "../../shared/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

    isLoaded = false;
    users: User[] = [];

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.data.subscribe(({ users }) => {
            this.users = users;
            this.isLoaded = true;
        });
    }

}
