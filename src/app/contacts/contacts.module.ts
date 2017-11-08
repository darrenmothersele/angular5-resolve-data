import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactListComponent} from './contact-list/contact-list.component';
import {ContactsRoutingModule} from "./contacts-routing.module";
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

@NgModule({
    imports: [
        CommonModule,
        ContactsRoutingModule
    ],
    providers: [
    ],
    declarations: [ContactListComponent, ContactDetailComponent, ContactCardComponent, ContactPageComponent]
})
export class ContactsModule {
}
