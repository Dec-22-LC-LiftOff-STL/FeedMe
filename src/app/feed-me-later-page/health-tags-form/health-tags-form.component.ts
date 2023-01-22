import { Component } from '@angular/core';

@Component({
  selector: 'app-health-tags-form',
  templateUrl: './health-tags-form.component.html',
  styleUrls: ['./health-tags-form.component.css']
})
export class HealthTagsFormComponent {

  healthTags: Array<string> = ['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6', 'tag7', 'tag8']

}