import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {User} from "../model/user.model";
import {Observable} from "rxjs/Observable";
import {UserService} from "../shared/user.service";

@Injectable()
export class UserListResolver implements Resolve<User[]> {

    constructor(private service: UserService) {
    }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<User[]> {
        return this.service.getUsers();
    }
}
