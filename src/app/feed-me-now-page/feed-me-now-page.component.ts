import { Component, OnInit } from '@angular/core';
import { ChoiceColumn } from '../model/choice-columns';
import { AuthService } from '../Services/auth.service';
import { ColumnsService } from '../Services/columns.service';
interface Column {
  items: string[];

  columnKey: string;

  columnTitle: string;
}

@Component({
  selector: 'app-feed-me-now-page',
  templateUrl: './feed-me-now-page.component.html',
  styleUrls: ['./feed-me-now-page.component.css'],
})
export class FeedMeNowPageComponent implements OnInit {
    columns: ChoiceColumn[] = [{
      name: "Snacks",
      items: [""]
    }, {
      name: "Take Out",
      items: [""]
    }];

    newColumnTitle: string = "";

    constructor(private columnService: ColumnsService, private auth: AuthService) {}

    ngOnInit(): void {
      // logged in user retrieve from backend
      if(this.auth.userInfo) {
        this.columnService.getColumns().subscribe({
          next: data => {
            if(data?.length) {
              this.columns = data;
            }
            else {
              for(const column of this.columns){
                this.columnService.createColumn(column).subscribe({
                  next: columnData => {
                    column.id = columnData.id;
                  }
                });
              }
            }
          }
        });
      }
      // anonymous user retrieve from local storage
      else {
        // get the string from localStorage
        const str = localStorage.getItem("column");
        if(str) {
          // convert string to valid object
          this.columns = JSON.parse(str);
        }
      }
    }

    addNewColumn() {
      if(this.newColumnTitle === "") {
        alert("New column needs a name!");
      }
      else {
        // logged in user save to backend
        if(this.auth.userInfo) {
          const column: ChoiceColumn = {name: this.newColumnTitle, items: []};

          this.columnService.createColumn(column).subscribe({
            next: data => {
              this.columns.push(data);
            }
          });
        }
        // anonymous user save to local storage
        else {
          let index: number = this.columns.length + 1;
          this.columns.push({items: [""], id: index, name: this.newColumnTitle});
          this.saveToLocalStorage();
          this.newColumnTitle = "";
        }
      }
    }

    removeColumn(index: number) {
      this.columns.splice(index, 1);
      this.saveToLocalStorage();
    }

    saveToLocalStorage() { 
      // convert array to JSON string using JSON.stringify() 
      const jsonArr = JSON.stringify(this.columns);
  
      // save to localStorage
      localStorage.setItem("column", jsonArr);
    }
}
