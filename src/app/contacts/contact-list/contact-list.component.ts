import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user.model";
import {UserService} from "../../shared/user.service";

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

    isLoaded = false;
    users: User[] = [];

    constructor(service: UserService) {
        service.getUsers().subscribe(users => {
            this.users = users;
            this.isLoaded = true;
        });
    }

    ngOnInit() {
    }

}
