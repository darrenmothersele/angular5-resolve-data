import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {User} from "../model/user.model";

import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import {Post} from "../model/post.model";

@Injectable()
export class UserService {

    readonly endpoint = `${environment.api}/users`;

    constructor(private http: HttpClient) {}

    public getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.endpoint)
            .delay(1000) // simulate slow network
            .do(x => console.log('fetched users', x));
    }

    public getUser(id: number): Observable<User> {
        return this.http.get<User>(`${this.endpoint}/${id}`)
            .delay(1000) // simulate slow network
            .do(x => console.log(`fetched user ${id}`, x));
    }

    public getPostsByUser(id: number): Observable<Post[]> {
        const params = new HttpParams().set('userId', `${id}`);
        return this.http.get<Post[]>(`${this.endpoint}/posts`, { params })
            .delay(1000) // simulate slow network
            .do(x => console.log(`get posts for user ${id}`, x));
    }
}
