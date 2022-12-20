import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-feed-me-now-page',
  templateUrl: './feed-me-now-page.component.html',
  styleUrls: ['./feed-me-now-page.component.css'],
})
export class FeedMeNowPageComponent {
    items1: string[] = [""];

    items2: string[] = [""];

    items1Column: string = "items1";
    
    items2Column: string = "items2";
}
