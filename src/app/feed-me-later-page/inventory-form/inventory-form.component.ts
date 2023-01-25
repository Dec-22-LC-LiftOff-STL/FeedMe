import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inventory-form',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.css']
})
export class InventoryFormComponent {

  ingredients: string = "";

  @Output() 
  ingredientsSubmitted: EventEmitter<string[]> = new EventEmitter<string[]>();

  submit() {
    if(!this.ingredients) {
      alert("Please fill out the search form!");
    }
    else {
      this.ingredientsSubmitted.emit(this.ingredients.split(","));
    }
  }
}
