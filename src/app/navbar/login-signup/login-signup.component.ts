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
  
  // injects AuthService
  constructor(private auth: AuthService) {}

  // would recommend looking up OnInit
  ngOnInit(): void {
    
    // gets the savedUsername from local storage
    const savedUsername = localStorage.getItem("savedUsername");

    // if there is one
    if(savedUsername) {
      
      // set remember me to true
      this.rememberMe = true;

      // assign it to savedUsername
      this.loginUsername = savedUsername;
    }
  }

  rememberMeChanged(value: boolean) {
    
    // assigns rememberMe to value
    this.rememberMe = value;

    // if rememberMe is checked
    if(this.rememberMe) {
      
      // saves the users entered username in local storage
      localStorage.setItem("savedUsername", this.loginUsername);
    } 
    else {
      // removes it from local storage is not checked
      localStorage.removeItem("savedUsername");
    }
  }

  loginUsernameChanged(value: string) {

    // if rememberMe is checked
    if(this.rememberMe) {

      // updates local storage with the value if it was changed
      localStorage.setItem("savedUsername", value);
    }
  }

  register() {
    this.successMessage = "";

    this.registerError = "";
    
    // if the username field is blank, if the email field is blank, if the password field is blank and the confirm password field is blank
    if(this.registerUsername === "" || this.registerEmail === "" || this.registerPassword === "" || this.registerConfirmPassword === "") {

      // assigns this string to register error and ends the if
      this.registerError = "Please fill out all fields!";
      return;
    }

    // if register password field and confirm password field don't match
    if(this.registerPassword !== this.registerConfirmPassword) {

      // assigns this string to register error and ends the if
      this.registerError = "Please make sure both passwords match!";
      return;
    }

    // registers the user using the given information and subscribes
    this.auth.register(this.registerUsername, this.registerEmail, this.registerPassword).subscribe({
      next: (data) => {

        // sets the successMessage to data message
        this.successMessage = data.message;

        // clicks the login tab so when you register successfully it changes you to the login screen
        this.loginLinkElement.nativeElement.click();
      },

      // returns an error if invalid in any way
      error: (error) => {
        this.registerError = error?.error?.message || "Invalid form submission";
      }
    });
  }
  
  login() {
    this.successMessage = "";

    this.loginError = "";
    
    // if username or password fields are left blank
    if(this.loginUsername === "" || this.loginPassword === "") {

      // assigns this string to loginError to be displayed and ends the if
      this.loginError = "Please fill out all fields!";
      return;
    }

    // logs the user in if both the username and password are correct
    this.auth.login(this.loginUsername, this.loginPassword).subscribe({
      next: (data) => {
        
        // assigns the success message to this string
        this.successMessage = "Login successful!";

        // assigns the userInfo to data
        this.auth.userInfo = data;

        // reloads the application so that the user doesn't see stale data
        location.reload();
      },

      // returns an error the fields are incorrect, i.e they entered an invalid password or username
      error: (error) => {
        this.loginError = error?.error?.message || "Invalid login credentials";
      }
    });
  }


  logout() {

    // logs the user out
    this.auth.logout().subscribe({
      next: () => {

        // sets userInfo to null (empties it)
        this.auth.userInfo = null;

        // reloads the page so the user isn't seeing stale data
        location.reload();
      }
    });
  }


  // opens the given modal
  openModal(){
    this.display='block';
  }

  // closes the given modal
  closeModal(){
    this.display='none';
  }


  // gets our userInfo object
  get userInfo() {
    return this.auth.userInfo;
  }
}
