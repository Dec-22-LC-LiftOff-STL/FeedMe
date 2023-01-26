import { Component, OnInit } from '@angular/core';
import { ChoiceColumn } from '../model/choice-columns';
import { AuthService } from '../Services/auth.service';
import { ColumnsService } from '../Services/columns.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ColumnLayoutService } from '../Services/column-layout-service';
import { ColumnLayout } from '../model/column-layout';

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
    currentLayout: ColumnLayout;

    columns: ChoiceColumn[] = [{
      name: "Snacks",
      items: [""]
    }, {
      name: "Take Out",
      items: [""]
    }];

    id: string = "";

    newColumnTitle: string = "";

    // injects all of our services, ActivatedRoute, and Router
    constructor(private columnService: ColumnsService, private auth: AuthService, private activatedRoute: ActivatedRoute, private layoutService: ColumnLayoutService, private router: Router) {}

    // would recommend looking up OnInit
    ngOnInit(): void {

      // checking if the user is authenticated / logged in
      if(this.auth.userInfo) {

        // checking the paramMap for our params
        this.activatedRoute.paramMap.subscribe(paramMap => {

          // assigning id to the current id in the paramMap, would recommend looking up activatedRoute and paramMap
          this.id = paramMap.get('id'); 

          // checking there is a valid id
          if(this.id) {

            // getting the column layout by id
            this.layoutService.getColumnLayoutById(this.id).subscribe({
              next: data => {
                this.currentLayout = data;

                // checking that data has columns that aren't empty
                if(data?.choiceColumns?.length) {
                  // assigning it to data
                  this.columns = data.choiceColumns.sort((a, b) => {
                    // numerical descending sort by id
                    return a.id - b.id;
                  });;
                }
                else {
                  this.columns = [];
                }
              }
            });
          }
          
          // if the user tries to delete the param from the url it redirects them to our first id, which is default
          else {

            // checks that layoutService has layouts and layouts is not empty before attempting to navigate to default
            if(this.layoutService.layouts.length > 0) {

              // uses navigate to redirect the user to the default layout, would recommend looking up router.navigate
              this.router.navigate(['/feed-me-now', this.layoutService.layouts[0].id]);
            }
          }
        });
      }
      
      // if not logged in users data saves to local storage
      else {
        // gets the string from localStorage
        const str = localStorage.getItem("column");
        if(str) {
          // convert string to valid object
          this.columns = JSON.parse(str);
        }
      }
    }

    async addNewColumn() {
      if(this.newColumnTitle === "") {
        alert("New column needs a name!");
      }
      else {
        // checking if the user is authenticated / logged in
        if(this.auth.userInfo) {
          let column: ChoiceColumn = {name: this.newColumnTitle, items: [""], columnLayout: this.currentLayout};

          column = await this.columnService.createColumn(column);

          this.columns.push(column);
        }
        // if not logged in anonymous users data saves to local storage
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
      // checks if the user is authenticated
      if(this.auth.userInfo) {
        // basically deletes a column by id
        const column = this.columns[index];
        this.columnService.deleteColumn(column.id).subscribe();
        this.columns.splice(index, 1);
      }
      // not authenticated user deletes from local storage
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
