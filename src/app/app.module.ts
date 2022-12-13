import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FeedMeNowPageComponent } from './feed-me-now-page/feed-me-now-page.component';
import { FeedMeLaterPageComponent } from './feed-me-later-page/feed-me-later-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FeedMeNowPageComponent,
    FeedMeLaterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
