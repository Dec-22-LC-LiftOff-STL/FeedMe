import { Component, OnInit } from '@angular/core';
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
    columns: Column[] = [{
      items: [""], 
      columnKey: "items1",
      columnTitle: "Snacks"
    }, {
      items: [""],
      columnKey: "items2",
      columnTitle: "Take Out"
    }];

    newColumnTitle: string = "";

    addNewColumn() {
      if(this.newColumnTitle === "") {
        alert("New column needs a name!");
      }
      else {
        let index: number = this.columns.length + 1;
        this.columns.push({items: [""], columnKey: "items" + index, columnTitle: this.newColumnTitle});
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
