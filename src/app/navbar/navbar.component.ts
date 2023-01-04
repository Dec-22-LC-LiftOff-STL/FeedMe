import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserInfo } from '../model/user-info';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  userInfo: UserInfo;

  setUserData(userInfo: UserInfo) {
    this.userInfo = userInfo;
  }
}
