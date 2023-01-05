import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  rememberMe = false;

  loginUsername = "";

  loginPassword = "";

  loginError = "";

  registerUsername = "";

  registerEmail = "";
  
  registerPassword = "";
  
  registerConfirmPassword = "";

  successMessage = "";

  registerError = "";

  @ViewChild("loginLink")
  loginLinkElement: ElementRef<HTMLAnchorElement>;


  display = "none"; 
  
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    const savedUsername = localStorage.getItem("savedUsername");

    if(savedUsername) {
      this.rememberMe = true;

      this.loginUsername = savedUsername;
    }
  }

  rememberMeChanged(value: boolean) {
    this.rememberMe = value;

    if(this.rememberMe) {
      localStorage.setItem("savedUsername", this.loginUsername);
    } 
    else {
      localStorage.removeItem("savedUsername");
    }
  }

  loginUsernameChanged(value: string) {
    if(this.rememberMe) {
      localStorage.setItem("savedUsername", value);
    }
  }

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
        this.auth.userInfo = data;
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
        this.auth.userInfo = null;
      }
    });
  }

  openModal(){
    this.display='block';
  }

  closeModal(){
    this.display='none';
  }

  get userInfo() {
    return this.auth.userInfo;
  }
}
