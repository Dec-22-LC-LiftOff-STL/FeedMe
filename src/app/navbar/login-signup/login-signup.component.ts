import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { UserInfo } from 'src/app/model/user-info';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent {

  loginUsername = "";

  loginPassword = "";

  loginError = "";

  registerUsername = "";

  registerEmail = "";
  
  registerPassword = "";
  
  registerConfirmPassword = "";

  successMessage = "";

  registerError = "";

  loggedIn = false;

  @Output()
  userDataChanged: EventEmitter<UserInfo> = new EventEmitter<UserInfo>();

  @ViewChild("loginLink")
  loginLinkElement: ElementRef<HTMLAnchorElement>;


  display = "none"; 
  
  constructor(private auth: AuthService) {};

  register() {
    this.successMessage = "";

    this.registerError = "";
    
    if(this.registerUsername === "" || this.registerEmail === "" || this.registerPassword === "" || this.registerConfirmPassword === "") {
      this.registerError = "Please fill out all fields!";
      return;
    }
    if(this.registerPassword !== this.registerConfirmPassword) {
      this.registerError = "Please make sure both passwords match!";
      return;
    }
    this.auth.register(this.registerUsername, this.registerEmail, this.registerPassword).subscribe({
      next: (data) => {
        this.successMessage = data.message;
        this.loginLinkElement.nativeElement.click();
      },
      error: (error) => {
        this.registerError = error?.error?.message || "Invalid form submission";
      }
    });
  }
  
  login() {
    this.successMessage = "";

    this.loginError = "";
    
    if(this.loginUsername === "" || this.loginPassword === "") {
      this.loginError = "Please fill out all fields!";
      return;
    }
    this.auth.login(this.loginUsername, this.loginPassword).subscribe({
      next: (data) => {
        this.successMessage = "Login successful!";
        this.userDataChanged.emit(data);
        this.loggedIn = true;
        this.closeModal();
      },
      error: (error) => {
        this.loginError = error?.error?.message || "Invalid login credentials";
      }
    });
  }

  logout() {
    this.auth.logout().subscribe({
      next: () => {
        this.loggedIn = false;
        this.userDataChanged.emit(null);
      }
    });
  }

  openModal(){
    this.display='block';
  }

  closeModal(){
    this.display='none';
  }
}
