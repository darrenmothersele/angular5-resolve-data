import {Component, Input} from '@angular/core';
import {User} from '../../model/user.model';

@Component({
    selector: 'app-contact-detail',
    templateUrl: './contact-detail.component.html',
    styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent {

    /* presentation component */

    @Input() user: User;
    @Input() isPartial = true;
}
