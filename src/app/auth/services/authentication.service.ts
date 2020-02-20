import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private token: string;

    constructor(private http: HttpClient) {
        this.token = localStorage.getItem('token');
    }

    public get currentUserToken(): string {
        return localStorage.getItem('token');
    }

    login(email, password) {
        return this.http.post<any>(`${environment.backendGEBaseUrl}/auth/signin`, { email, password })
            .pipe(map(result => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('token', result.token);
                return result.user;
            }));
    }

    logout() {
        return this.http.post<any>(`${environment.backendGEBaseUrl}/auth/logout`, '')
            .pipe(map(result => {
                // remove user token from local storage
                localStorage.removeItem('token');
                return result;
            }));
    }
}
