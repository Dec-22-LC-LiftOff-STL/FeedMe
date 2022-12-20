import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-me-now-column',
  templateUrl: './feed-me-now-column.component.html',
  styleUrls: ['./feed-me-now-column.component.css']
})
export class FeedMeNowColumnComponent implements OnInit {
  @Input()
  items: string[] = [""];

  @Input()
  columnName: string = "";

  randomItem: string = "";

  columnTitle: string = "";

  ngOnInit(): void {
    // get the string from localStorage
    const str = localStorage.getItem(this.columnName);
    const title = localStorage.getItem(this.columnName + "Title")
    if(str) {
      // convert string to valid object
      this.items = JSON.parse(str);
    }
    if(title) {
      this.columnTitle = title;
    }
  }

  addNewInput() {
    this.items.push("");
    this.saveToLocalStorage();
  }

  removeInput(index: number) {
    this.items.splice(index, 1);
    this.saveToLocalStorage();
  }

  // This prevents the app from re-rendering the list of input fields when they are typed in
  trackByFn(index: number, obj: any) {
    return index;
  }

  saveToLocalStorage() { 
    // convert array to JSON string using JSON.stringify() 
    const jsonArr = JSON.stringify(this.items);

    // save to localStorage
    localStorage.setItem(this.columnName, jsonArr);
    localStorage.setItem(this.columnName + "Title", this.columnTitle)
  }

  randomize() {
    // checks to make sure it contains atleast one item
    if(this.items.length <= 0) {
      alert("Please add one or more items to your list!");
    }
    // checks to make there are no empty fields
    else {
      // loops through the array of items to look for any empty values
      for(let i = 0; i < this.items.length; i++) {
        if(this.items[i] === "") {
          alert("Please ensure you have no empty fields!");
          return;
        }
      }
      // assign a random item using math.random
      this.randomItem = this.items[Math.floor(Math.random()*this.items.length)];
    }
  }
}
