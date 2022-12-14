import { Component } from '@angular/core';


import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-feed-me-now-page',
  templateUrl: './feed-me-now-page.component.html',
  styleUrls: ['./feed-me-now-page.component.css']
})
export class FeedMeNowPageComponent {

  fastFoods = [
    "Temcobell", "Burger Kang", "MacDoughnuts", "Mochi's and Sushi's"];



  addNewFastFood() {
    this.fastFoods.push("fastFoodName")
  }
  //  fastFood="";

  // randomizer(){
  randomFastFood = this.fastFoods[Math.floor(Math.random() * this.fastFoods.length)];
  //  this.fastFood= randomFastFood
  //  return this.fastFood
  //   }

}










