import { Component } from '@angular/core';
import { ChoiceColumn } from 'src/app/model/choice-columns';
import { ColumnLayout } from 'src/app/model/column-layout';
import { AuthService } from 'src/app/Services/auth.service';
import { ColumnLayoutService } from 'src/app/Services/column-layout-service';
import { ColumnsService } from 'src/app/Services/columns.service';

@Component({
  selector: 'app-create-new-layout',
  templateUrl: './create-new-layout.component.html',
  styleUrls: ['./create-new-layout.component.css']
})
export class CreateNewLayoutComponent {
  
  newLayoutName: string = "";

  newColumn1Name: string = "";

  newColumn2Name: string = "";

  display = "none"; 


  constructor(private layoutService: ColumnLayoutService, private auth: AuthService, private columnService: ColumnsService) {
    
  }

  // you have to attach async to a function to use await, which waits for the resolution of a promise
  // would recommend looking up Async Await
  async createNewLayout() {

    // checking that layout name has been filled out
    if(this.newLayoutName === "") {
      alert("Layout needs a name!");
    }

    // checking that column name 1 has been filled out
    else if(this.newColumn1Name === "") {
      alert("Column 1 needs a name!");
    }

    // checking that column name 2 has been filled out
    else if(this.newColumn2Name === "") {
      alert("Column 2 needs a name!");
    }

    // if they have, do this
    else {

      // checking that the user is logged in
      if(this.auth.userInfo) {

        // initializing a layout with the name the user has provided
        let layout: ColumnLayout = {name: this.newLayoutName};

        // Using our createColumnLayout function to create a column layout and assigning that to our initialized layout which waits for the resolution of a promise to move on
        layout = await this.layoutService.createColumnLayout(layout);

        // initializing both columns that the user will name with an empty input
        let column1: ChoiceColumn = {name: this.newColumn1Name, items: [""], columnLayout: layout};

        let column2: ChoiceColumn = {name: this.newColumn2Name, items: [""], columnLayout: layout};

        // using our createColumn function to 
        column1 = await this.columnService.createColumn(column1);

        column2 = await this.columnService.createColumn(column2);
        
        // puts our column1 and column2 into our choice column in our layout
        layout.choiceColumns = [column1, column2];

        // pushes our layout to the layouts objects
        this.layoutService.layouts.push(layout);
      }

      // resets all of the variables back to empty
      this.newLayoutName = "";

      this.newColumn1Name = "";

      this.newColumn2Name = "";

      // closes the create new layout modal when done
      this.closeModal();
    }
  }

  // opens the modal
  openModal(){
    this.display='block';
  }

  // closes the modal
  closeModal(){
    this.display='none';
  }
}
