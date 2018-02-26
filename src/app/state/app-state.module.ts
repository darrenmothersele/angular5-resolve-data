import {NgModule, Optional, SkipSelf} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {reducers} from './reducers';
import {environment} from '../../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {UsersEffects} from './users/effects';


@NgModule({
    imports: [
        StoreModule.forRoot(reducers),
        environment.production ? [] : StoreDevtoolsModule.instrument(),
        EffectsModule.forRoot([
            UsersEffects
        ])
    ]
})
export class AppStateModule {
    constructor(
        // Ensure global state is imported only once
        @Optional() @SkipSelf() parentModule: AppStateModule
    ) {
        if (parentModule) {
            throw new Error('AppStateModule is already loaded. Import only in AppModule.');
        }
    }
}
