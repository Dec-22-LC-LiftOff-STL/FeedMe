import { Component, Input } from '@angular/core';
import { RecipeResult } from 'src/app/model/recipe';

@Component({
  selector: 'app-recipe-results',
  templateUrl: './recipe-results.component.html',
  styleUrls: ['./recipe-results.component.css']
})
export class RecipeResultsComponent {

  @Input()
  recipeResults: RecipeResult[] = [];
  
}
