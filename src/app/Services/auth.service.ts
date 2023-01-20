import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { MessageResponse } from '../model/message-response';
import { UserInfo } from '../model/user-info';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    // gives us the userInfo interface
    userInfo: UserInfo;

    // injects http into our application to connect with the back-end, I recommend looking this up
    constructor(private http: HttpClient) { 

    }

    // login function using our related endpoint in the back-end using a post request
    login(username: string, password: string) {
        return this.http.post<UserInfo>("/api/auth/signin", {
            username,
            password
        });
    }

    // register function using our related endpoint in the back-end using a post request
    register(username: string, email: string, password: string) {
        return this.http.post<MessageResponse>("/api/auth/signup", {
            username, 
            email,
            password
        });
    }

    // logout function using our related endpoint in the back-end using a post request
    logout() {
        return this.http.post("/api/auth/signout", {

        });
    }

    // getUserInfo function using our related endpoint in the back-end using a get request
    // would recommend looking up Async Await
    async getUserInfo() {
        try {
            // converts the observable get request into a promise by fetching the last value from it and then awaits the promise
            this.userInfo = await lastValueFrom(this.http.get<UserInfo>("/api/users"));
        }

        // catches any errors that might be thrown
        catch(e) {
            this.userInfo = null;
        }
    }
}
