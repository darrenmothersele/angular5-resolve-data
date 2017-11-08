import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactListComponent} from './contact-list/contact-list.component';
import {ContactsRoutingModule} from "./contacts-routing.module";
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import {UserListResolver} from "./user-list.resolver";
import {UserResolver} from "./user.resovler";

@NgModule({
    imports: [
        CommonModule,
        ContactsRoutingModule
    ],
    providers: [
        UserListResolver,
        UserResolver
    ],
    declarations: [ContactListComponent, ContactDetailComponent]
})
export class ContactsModule {
}
