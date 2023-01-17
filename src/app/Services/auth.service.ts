import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { MessageResponse } from '../model/message-response';
import { UserInfo } from '../model/user-info';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    userInfo: UserInfo;

    constructor(private http: HttpClient) { 

    }

    login(username: string, password: string) {
        return this.http.post<UserInfo>("/api/auth/signin", {
            username,
            password
        });
    }

    register(username: string, email: string, password: string) {
        return this.http.post<MessageResponse>("/api/auth/signup", {
            username, 
            email,
            password
        });
    }

    logout() {
        return this.http.post("/api/auth/signout", {

        });
    }

    async getUserInfo() {
        try {
            this.userInfo = await lastValueFrom(this.http.get<UserInfo>("/api/users"));
        }
        catch(e) {
            this.userInfo = null;
        }
    }
}