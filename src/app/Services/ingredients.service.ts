import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { UserIngredients } from '../model/user-ingredients';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

    constructor(private http: HttpClient) { 

    }

    async getUserIngredients() { 
        return await lastValueFrom(this.http.get<UserIngredients[]>("/api/recipes/search/user-ingredients"));
    }

    async createUserIngredients(UserIngredients: UserIngredients) {
        try {
            // converts the observable get request into a promise by fetching the last value from it and then awaits the promise
            return await lastValueFrom(this.http.post<UserIngredients>("/api/user-ingredients/", UserIngredients));
        } 

        // catches any errors that might be thrown
        catch(e) {
            console.error(e);
            return null;
        }
    }

        // updates a column using a related endpoint in the back end and a put request
        updateUserIngredients(userIngredients: UserIngredients) { 
            return this.http.put<UserIngredients>("/api/user-ingredients/" + userIngredients.id, userIngredients);
        }
    
        // deletes a column using a related endpoint in the back end and a delete request
        deleteUserIngredients(id: number) { 
            return this.http.delete("/api/user-ingredients/" + id);
        }

}