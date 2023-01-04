import { Component, OnInit } from '@angular/core';
import { UserInfo } from './model/user-info';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userInfo: UserInfo;


  constructor(private auth: AuthService) {
    
  }

  ngOnInit(): void {
    this.auth.getUserInfo().subscribe({
      next: (data) => {
        this.userInfo = data;
      },
      error: (error) => {
        
      }
    });
  }
}
