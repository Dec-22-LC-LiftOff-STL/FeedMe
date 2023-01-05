import { Component, OnInit } from '@angular/core';
import { ChoiceColumn } from '../model/choice-columns';
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
      id: 0,
      name: "Snacks",
      items: [""]
    }, {
      id: 1,
      name: "Take Out",
      items: [""]
    }];

    newColumnTitle: string = "";

    addNewColumn() {
      if(this.newColumnTitle === "") {
        alert("New column needs a name!");
      }
      else {
        let index: number = this.columns.length + 1;
        this.columns.push({items: [""], id: index, name: this.newColumnTitle});
        this.saveToLocalStorage();
        this.newColumnTitle = "";
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

    ngOnInit(): void {
      // get the string from localStorage
      const str = localStorage.getItem("column");
      if(str) {
        // convert string to valid object
        this.columns = JSON.parse(str);
      }
    }
}
