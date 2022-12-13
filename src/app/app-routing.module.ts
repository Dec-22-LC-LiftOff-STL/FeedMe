import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FeedMeNowPageComponent } from './feed-me-now-page/feed-me-now-page.component';
import { FeedMeLaterPageComponent } from './feed-me-later-page/feed-me-later-page.component';

const routes: Routes = [
  { path: 'feed-me-now', component: FeedMeNowPageComponent },
  { path: 'feed-me-later', component: FeedMeLaterPageComponent },
  { path: '', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
