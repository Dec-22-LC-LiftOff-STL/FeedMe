import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Recipe, RecipeResult } from '../model/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

    // injects http into our application to connect with the back-ends endpoints, I recommend looking this up
    constructor(private http: HttpClient) { 

    }

    // searchByIngredients function using our related endpoint in the back-end using a get request to return information 
    // when this function is used.
    // would recommend looking up Async Await
    async searchByIngredients(ingredients: string[]) { 
        // converts the observable get request into a promise by fetching the last value from it and then awaits the promise
        // getting the information needed when this is called, separating our ingredients, that are submitted by the user, by comma into a string
        // url encoding is used which is why this works, %2C is a comma and %20 is a space, would recommend looking this up
        return await lastValueFrom(this.http.get<RecipeResult[]>("/api/recipes/search/ingredients/" + ingredients.join(",")));
    }

    randomizeRecipe(recipes: RecipeResult[]) {
        // returning a randomized recipe
        return recipes[Math.floor((Math.random()*recipes.length))];
    }
}