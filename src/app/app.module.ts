import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import { LayoutComponent } from './layout/layout.component';
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./shared/user.service";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./shared/store";
import {environment} from "../environments/environment";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {UserEffects} from "./shared/store/effects/user.effects";


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/users'
            },
            {
                path: 'users',
                loadChildren: './contacts/contacts.module#ContactsModule'
            }
        ]
    }
];

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
        StoreModule.forRoot(reducers),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        EffectsModule.forRoot([
            UserEffects
        ])
    ],
    providers: [
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
