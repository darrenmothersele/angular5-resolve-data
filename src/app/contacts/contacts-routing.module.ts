import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactListComponent} from './contact-list/contact-list.component';
import {ContactPageComponent} from './contact-page/contact-page.component';

export const routes: Routes = [
    {
        path: '',
        component: ContactListComponent
    },
    {
        path: ':id',
        component: ContactPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactsRoutingModule {}
