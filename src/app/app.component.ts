import { Component, OnInit } from '@angular/core';
import { ColumnLayoutService } from './Services/column-layout-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }

  constructor() {
    
  }

  ngOnInit(): void {

  }
}
