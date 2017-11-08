import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {User} from "../model/user.model";
import {Observable} from "rxjs/Observable";
import {UserService} from "../shared/user.service";

import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserResolver implements Resolve<User> {

    constructor(
        private service: UserService,
        private router: Router
    ) {
    }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<User> {
        const id = route.paramMap.get('id');
        return this.service.getUser(+id)
            .catch(err => {
                console.error(err); // deal with API error (eg not found)
                this.router.navigate(['/']); // could redirect to error page
                return Observable.empty<User>();
            });
    }
}
