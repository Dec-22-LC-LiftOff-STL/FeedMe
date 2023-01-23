import { Component } from '@angular/core';
import { RecipeResult } from '../model/recipe';
import { RecipeService } from '../Services/recipe.service';

@Component({
  selector: 'app-feed-me-later-page',
  templateUrl: './feed-me-later-page.component.html',
  styleUrls: ['./feed-me-later-page.component.css']
})
export class FeedMeLaterPageComponent {
  recipes: RecipeResult[] = [];

  randomRecipe: RecipeResult;

  constructor(private recipeService: RecipeService) {}

  async fetchRecipes(ingredients: string[]) {
    this.recipes = await this.recipeService.searchByIngredients(ingredients);

    this.randomRecipe = this.recipeService.randomizeRecipe(this.recipes);
  }
  
}
