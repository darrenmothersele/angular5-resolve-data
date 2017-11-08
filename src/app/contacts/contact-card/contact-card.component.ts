import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../model/user.model";

@Component({
    selector: 'app-contact-card',
    templateUrl: './contact-card.component.html',
    styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent {

    /* presentation component */

    @Input() user: User;

}
