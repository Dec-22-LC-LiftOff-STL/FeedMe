import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ChoiceColumn } from '../model/choice-columns';

@Injectable({
  providedIn: 'root'
})
export class ColumnsService {
    
    // injects http into our application to connect with the back-ends endpoints, I recommend looking this up
    constructor(private http: HttpClient) { 

    }

    // gets our columns using a related endpoint in the back end and a get request
    getColumns() { 
        return this.http.get<ChoiceColumn[]>("/api/choice-columns");
    }

    
    // you have to attach async to a function to use await, which waits for the resolution of a promise
    // would recommend looking up Async Await
    // creates a column using a related endpoint in the back end and a post request
    async createColumn(choiceColumn: ChoiceColumn) {
        try {
            // converts the observable get request into a promise by fetching the last value from it and then awaits the promise
            return await lastValueFrom(this.http.post<ChoiceColumn>("/api/choice-columns", choiceColumn));
        } 

        // catches any errors that might be thrown
        catch(e) {
            console.error(e);
            return null;
        }
    }


    // updates a column using a related endpoint in the back end and a put request
    updateColumn(choiceColumn: ChoiceColumn) { 
        return this.http.put<ChoiceColumn>("/api/choice-columns/" + choiceColumn.id, choiceColumn);
    }

    // deletes a column using a related endpoint in the back end and a delete request
    deleteColumn(id: number) { 
        return this.http.delete("/api/choice-columns/" + id);
    }
}