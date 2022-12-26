import { NgModule } from '@angular/core';
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


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FeedMeNowPageComponent,
    FeedMeLaterPageComponent,
    FeedMeNowColumnComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
