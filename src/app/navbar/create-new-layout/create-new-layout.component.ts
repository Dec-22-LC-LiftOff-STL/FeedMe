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

  async createNewLayout() {
    if(this.newLayoutName === "") {
      alert("Layout needs a name!");
    }
    else if(this.newColumn1Name === "") {
      alert("Column 1 needs a name!");
    }
    else if(this.newColumn2Name === "") {
      alert("Column 2 needs a name!");
    }
    else {
      if(this.auth.userInfo) {
        let layout: ColumnLayout = {name: this.newLayoutName};

        layout = await this.layoutService.createColumnLayout(layout);

        let column1: ChoiceColumn = {name: this.newColumn1Name, items: [""], columnLayout: layout};

        let column2: ChoiceColumn = {name: this.newColumn2Name, items: [""], columnLayout: layout};

        column1 = await this.columnService.createColumn(column1);

        column2 = await this.columnService.createColumn(column2);
        
        layout.choiceColumns = [column1, column2];

        this.layoutService.layouts.push(layout);
      }

      this.newLayoutName = "";

      this.newColumn1Name = "";

      this.newColumn2Name = "";

      this.closeModal();
    }
  }

  openModal(){
    this.display='block';
  }

  closeModal(){
    this.display='none';
  }
}
