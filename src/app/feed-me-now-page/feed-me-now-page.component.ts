import { Component } from '@angular/core';


import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-feed-me-now-page',
  templateUrl: './feed-me-now-page.component.html',
  styleUrls: ['./feed-me-now-page.component.css']
})
export class FeedMeNowPageComponent {

  orderFoods: string[] = [
    "Temcobell", "Burger Kang", "MacDoughnuts", "Mochi's and Sushi's", "Mon-Keigh Joes", "Los Pollos Hermanos"];

  homeFoods: string[] = [
    "Cold Pizza", "Cereal", "Amazing Pot Roast Leftovers", "Microwave Pot Pie", "Pizza Rolls", "Ham Sandwich"
  ]



  addNewFastFood = (): void => {
    this.orderFoods.push("fastFoodName")
  }
  //  fastFood="";

  randomizer = (array: string[]): string => {
    return array[Math.floor(Math.random() * array.length)]
  }

  randomHomeFood = this.randomizer(this.homeFoods)
  randomOrderFood = this.randomizer(this.orderFoods)
  // randomizer(){
  randomFastFood: string = this.orderFoods[Math.floor(Math.random() * this.orderFoods.length)];
  //  this.fastFood= randomFastFood
  //  return this.fastFood
  //   }

}










