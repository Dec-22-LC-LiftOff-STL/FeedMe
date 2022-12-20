import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncsService {

  randomize(array: string[]): string {
    // checks to make sure it contains atleast one item
    if(array.length <= 0) {
      alert("Please add one or more items to your list!");
    }
    // checks to make there are no empty fields
    else {
      // loops through the array of items to look for any empty values
      for(let i = 0; i < array.length; i++) {
        if(array[i] === "") {
          alert("Please ensure you have no empty fields!");
          // break;
        }
      }
    }
      // assign a random item using math.random
    return array[Math.floor(Math.random()*array.length)];
  }

  constructor() { }
}
