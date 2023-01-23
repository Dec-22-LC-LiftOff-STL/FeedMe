import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inventory-form',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.css']
})
export class InventoryFormComponent implements OnInit {

  ingredients: string = "";

  @Output() 
  ingredientsSubmitted: EventEmitter<string[]> = new EventEmitter<string[]>();

  submit() {
    this.ingredientsSubmitted.emit(this.ingredients.split(","));

  }

}
