import { Component, Input } from '@angular/core';
import { ColumnLayoutService } from '../Services/column-layout-service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {


  constructor(private layoutService: ColumnLayoutService) {
    
  }

  get getLayouts() {
    return this.layoutService.layouts;
  }


}
