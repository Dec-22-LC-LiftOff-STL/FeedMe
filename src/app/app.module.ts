import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FeedMeNowPageComponent } from './feed-me-now-page/feed-me-now-page.component';
import { FeedMeLaterPageComponent } from './feed-me-later-page/feed-me-later-page.component';
import { FormsModule } from '@angular/forms';
import { FeedMeNowColumnComponent } from './feed-me-now-page/feed-me-now-column/feed-me-now-column.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginSignupComponent } from './navbar/login-signup/login-signup.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './Services/auth.service';
import { ColumnLayoutService } from './Services/column-layout-service';
import { CreateNewLayoutComponent } from './navbar/create-new-layout/create-new-layout.component';

function initializeApp(authService: AuthService, columnLayoutService: ColumnLayoutService): () => Promise<void> {
    return async () => {
      await authService.getUserInfo();
      if(authService.userInfo) {
        await columnLayoutService.loadColumnLayouts();
      }
    }
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FeedMeNowPageComponent,
    FeedMeLaterPageComponent,
    FeedMeNowColumnComponent,
    NavbarComponent,
    LoginSignupComponent,
    CreateNewLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeApp,
    deps: [AuthService, ColumnLayoutService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
