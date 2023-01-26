import { Component } from '@angular/core';
import { UserInfo } from '../model/user-info';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private auth: AuthService) {}

  get userInfo() {
    return this.auth.userInfo;
  }
}
