import { Component, OnInit } from '@angular/core';
import { ChoiceColumn } from '../model/choice-columns';
import { AuthService } from '../Services/auth.service';
import { ColumnsService } from '../Services/columns.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ColumnLayoutService } from '../Services/column-layout-service';

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

    id: string = "";

    newColumnTitle: string = "";

    constructor(private columnService: ColumnsService, private auth: AuthService, private activatedRoute: ActivatedRoute, private layoutService: ColumnLayoutService, private router: Router) {}

    ngOnInit(): void {

      this.activatedRoute.paramMap.subscribe(paramMap => { 
        this.id = paramMap.get('id'); 

        // logged in user retrieve from backend
        if(this.auth.userInfo) {
          if(this.id) {
            this.layoutService.getColumnLayoutById(this.id).subscribe({
              next: data => {
                if(data?.choiceColumns?.length) {
                  this.columns = data.choiceColumns;
                }
              }
            });
          }
          else {
            this.router.navigate(['/feed-me-now', this.layoutService.layouts[0].id]);
          }
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
      });
    }

    addNewColumn() {
      if(this.newColumnTitle === "") {
        alert("New column needs a name!");
      }
      else {
        // logged in user save to backend
        if(this.auth.userInfo) {
          const column: ChoiceColumn = {name: this.newColumnTitle, items: [""]};

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
        this.newColumnTitle = "";
      }
    }

    removeColumn(index: number) {
      // logged in user delete from backend
      if(this.auth.userInfo) {
        const column = this.columns[index];
        this.columnService.deleteColumn(column.id).subscribe();
        this.columns.splice(index, 1);
      }
      // anonymous user delete from local storage
      else {
        this.columns.splice(index, 1);
        this.saveToLocalStorage();
      }
    }

    saveToLocalStorage() { 
      // convert array to JSON string using JSON.stringify() 
      const jsonArr = JSON.stringify(this.columns);
  
      // save to localStorage
      localStorage.setItem("column", jsonArr);
    }
}
