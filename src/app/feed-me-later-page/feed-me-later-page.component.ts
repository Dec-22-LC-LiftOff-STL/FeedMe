import { Component } from '@angular/core';
import { RecipeResult } from '../model/recipe';
import { RecipeService } from '../Services/recipe.service';

@Component({
  selector: 'app-feed-me-later-page',
  templateUrl: './feed-me-later-page.component.html',
  styleUrls: ['./feed-me-later-page.component.css']
})
export class FeedMeLaterPageComponent {

  // Initializing a recipes array of objects of type RecipeResult array
  recipes: RecipeResult[] = [];

  // RandomRecipe of type RecipeResult
  randomRecipe: RecipeResult;

  // Injecting our recipe service
  constructor(private recipeService: RecipeService) {}

  // Async annotation needed to use await in the function, would recommend looking up async await
  async fetchRecipes(ingredients: string[]) {

    // setting our recipes array to the ingredients submitted by the user and pushed out by the ingredientsSubmitted EventEmitter which calls this function
    // in our html file of this component
    this.recipes = await this.recipeService.searchByIngredients(ingredients);

    // setting our randomRecipe to the recipe we get by randomizing the 20 recipes that we got on line 26 from the users input
    this.randomRecipe = this.recipeService.randomizeRecipe(this.recipes);
  }
  
}
