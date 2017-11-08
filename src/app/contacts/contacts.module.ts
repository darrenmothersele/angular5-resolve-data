import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactListComponent} from './contact-list/contact-list.component';
import {ContactsRoutingModule} from "./contacts-routing.module";
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

@NgModule({
    imports: [
        CommonModule,
        ContactsRoutingModule
    ],
    declarations: [ContactListComponent, ContactDetailComponent]
})
export class ContactsModule {
}
