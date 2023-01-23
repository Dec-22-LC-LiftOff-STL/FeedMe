import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Recipe } from '../model/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

    // injects http into our application to connect with the back-ends endpoints, I recommend looking this up
    constructor(private http: HttpClient) { 

    }

    async searchByIngredients(ingredients: string[]) { 
        return await lastValueFrom(this.http.get<Recipe[]>("/api/recipes/search/ingredients/" + ingredients.join(",")));
    }

    randomizeRecipe(recipes: Recipe[]) {
        return this[Math.floor((Math.random()*recipes.length))];
    }
}