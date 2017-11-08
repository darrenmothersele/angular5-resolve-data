import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ContactListComponent} from "./contact-list/contact-list.component";
import {ContactDetailComponent} from "./contact-detail/contact-detail.component";
import {UserListResolver} from "./user-list.resolver";

export const routes: Routes = [
    {
        path: '',
        component: ContactListComponent,
        resolve: {
            users: UserListResolver
        }
    },
    {
        path: ':id',
        component: ContactDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactsRoutingModule {}
