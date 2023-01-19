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

  // injects our services
  constructor(private layoutService: ColumnLayoutService, private auth: AuthService) {

  }

  removeLayout(index: number, event: MouseEvent) {
    
    // this prevents the dropdown from closing when the delete button is clicked
    event.stopPropagation();

    // checks if the user is logged in
    if(this.auth.userInfo) {

      // removing a layout by splicing it at its index
      const layout = this.layoutService.layouts[index];
      this.layoutService.deleteColumnLayout(layout.id).subscribe();
      this.layoutService.layouts.splice(index, 1);
    }
  }

  editLayout(index: number, event: MouseEvent) {

      // this prevents the dropdown from closing when the delete button is clicked
      event.stopPropagation();

      // checks if the user is logged in
      if(this.auth.userInfo) {

        // assigns our edited layout to the layout at the given index
        this.editingNavbarLayout = this.layoutService.layouts[index];

        // assigns our editted layout name to the layouts name at the given index
        this.edittedLayoutName = this.layoutService.layouts[index].name;
      }
  }

  confirmEditLayout(index: number, event: MouseEvent) {
    // this prevents the dropdown from closing when the delete button is clicked
    event.stopPropagation();

    // calls our updateColumnLayout function from layoutService
    this.layoutService.updateColumnLayout({
      // gives it an anonymous object containing our editing navbar layouts id and our edittedLayoutName name
      id: this.editingNavbarLayout.id,
      name: this.edittedLayoutName
    }).subscribe({
      next: data => {
        // assigns current layout to data
        this.layoutService.layouts[index] = data;

        // sets them back to empty and null to end the if statement on line 27 in our html
        this.editingNavbarLayout = null;
        this.edittedLayoutName = "";
      }
    });
  }

  cancelEditLayout(event: MouseEvent) {
    // this prevents the dropdown from closing when the delete button is clicked
    event.stopPropagation();

    // sends it to our else statement on line 27 in our html to "cancel" the editing function and sets edittedLayoutName back to empty string
    this.editingNavbarLayout = null;
    this.edittedLayoutName = "";
  }

  // gets our layouts from LayoutService
  get getLayouts() {
    return this.layoutService.layouts;
  }

  // gets our userInfo from AuthService
  get userInfo() {
    return this.auth.userInfo;
  }
}
