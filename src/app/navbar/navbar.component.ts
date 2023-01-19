import { Component, Input } from '@angular/core';
import { ColumnLayout } from '../model/column-layout';
import { AuthService } from '../Services/auth.service';
import { ColumnLayoutService } from '../Services/column-layout-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  editingNavbarLayout: ColumnLayout;

  edittedLayoutName: string = "";

  constructor(private layoutService: ColumnLayoutService, private auth: AuthService) {

  }

  get getLayouts() {
    return this.layoutService.layouts;
  }

  removeLayout(index: number, event: MouseEvent) {
    // this prevents the dropdown from closing when the delete button is clicked
    event.stopPropagation();
    if(this.auth.userInfo) {
      const layout = this.layoutService.layouts[index];
      this.layoutService.deleteColumnLayout(layout.id).subscribe();
      this.layoutService.layouts.splice(index, 1);
    }
  }

  editLayout(index: number, event: MouseEvent) {
      // this prevents the dropdown from closing when the delete button is clicked
      event.stopPropagation();
      if(this.auth.userInfo) {
        this.editingNavbarLayout = this.layoutService.layouts[index];
        this.edittedLayoutName = this.layoutService.layouts[index].name;
      }
  }

  confirmEditLayout(index: number, event: MouseEvent) {
    // this prevents the dropdown from closing when the delete button is clicked
    event.stopPropagation();

    this.layoutService.updateColumnLayout({
      id: this.editingNavbarLayout.id,
      name: this.edittedLayoutName
    }).subscribe({
      next: data => {
        this.layoutService.layouts[index] = data;
        this.editingNavbarLayout = null;
        this.edittedLayoutName = "";
      }
    });
  }

  cancelEditLayout(event: MouseEvent) {
    // this prevents the dropdown from closing when the delete button is clicked
    event.stopPropagation();

    this.editingNavbarLayout = null;
    this.edittedLayoutName = "";
  }
}
