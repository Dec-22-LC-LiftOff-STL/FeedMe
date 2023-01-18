import { Component, Input } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ColumnLayoutService } from '../Services/column-layout-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  constructor(private layoutService: ColumnLayoutService, private auth: AuthService) {

  }

  get getLayouts() {
    return this.layoutService.layouts;
  }

  removeLayout(index: number) {
    if(this.auth.userInfo) {
      const column = this.layoutService.layouts[index];
      this.layoutService.deleteColumnLayout(column.id).subscribe();
      this.layoutService.layouts.splice(index, 1);
    }
  }
}
