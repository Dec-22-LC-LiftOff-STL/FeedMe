import { Component } from '@angular/core';


import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-feed-me-now-page',
  templateUrl: './feed-me-now-page.component.html',
  styleUrls: ['./feed-me-now-page.component.css']
})
export class FeedMeNowPageComponent {

  orderFoods: string[] = [
   ];

  onHandFoods: string[] = [
    
  ]

  randomOnHandFood: string = ''
  randomOrderFood: string = ''


  addNewFastFood = (): void => {
    this.orderFoods.push("fastFoodName")
  }
  //  fastFood="";

  randomizer = (array: string[]): string => {
    return array[Math.floor(Math.random() * array.length)]
  }

  randomizeOnHandFood = (): void => {
    this.randomOnHandFood = this.randomizer(this.onHandFoods)
  }

  randomizeOrderFood = (): void => {
    this.randomOrderFood = this.randomizer(this.orderFoods)
  }
//AddSnackby get element
// addNewSnack(){
//   this.onHandFoods.push(document.getElementById("snackInput"))
// }

addNewOrder(value: string) {
  this.orderFoods.push(value)
  console.log(this.orderFoods);
}



addNewSnack(value: string) {
  this.onHandFoods.push(value)
  console.log(this.onHandFoods);
}
}



