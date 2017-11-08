import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ContactListComponent} from "./contact-list/contact-list.component";
import {ContactDetailComponent} from "./contact-detail/contact-detail.component";

export const routes: Routes = [
    {
        path: '',
        component: ContactListComponent
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
