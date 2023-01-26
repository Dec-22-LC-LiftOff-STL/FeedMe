import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inventory-form',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.css']
})
export class InventoryFormComponent {

  // initializing an ingredients variable of type string, assigned to empty string
  ingredients: string = "";

  // ingredientsSubmitted with the Output() annotation so that the ingredients can be outputted from this component to the parent component
  @Output() 
  ingredientsSubmitted: EventEmitter<string[]> = new EventEmitter<string[]>();

  submit() {
    // checks if there were no ingredients submitted by the user and alerts them if so
    if(!this.ingredients) {
      alert("Please fill out the search form!");
    }
    else {
      // uses ingredientsSubmitted to push out this information to our parent component, which is splitting the ingredients string into an array, separated by commas
      this.ingredientsSubmitted.emit(this.ingredients.split(","));
    }
  }
}
