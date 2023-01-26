import { Component, Input } from '@angular/core';
import { RecipeResult } from 'src/app/model/recipe';

@Component({
  selector: 'app-recipe-results',
  templateUrl: './recipe-results.component.html',
  styleUrls: ['./recipe-results.component.css']
})
export class RecipeResultsComponent {

  // used to display the list of 20 in this components html
  // and passed in to the parent components html and renamed as recipes 
  @Input()
  recipeResults: RecipeResult[] = [];
}
