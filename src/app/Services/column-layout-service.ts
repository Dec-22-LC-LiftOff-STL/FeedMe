import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ColumnLayout } from '../model/column-layout';
import { UserInfo } from '../model/user-info';

@Injectable({
  providedIn: 'root'
})
export class ColumnLayoutService {

    // initializing an empty ColumnLayout to layouts to be used in later code
    layouts: ColumnLayout[] = [];

    // injects http into our application to connect with the back-end, I recommend looking this up
    constructor(private http: HttpClient) { 

    }

    // getting a column layout by id using the related endpoint in the back-end and a get request
    getColumnLayoutById(id: string) {
        return this.http.get<ColumnLayout>("/api/column-layouts/" + id);
    }

    // you have to attach async to a function to use await, which waits for the resolution of a promise
    // would recommend looking up Async Await
    // loads the column layouts using the related endpoint in the back-end and a get request
    async loadColumnLayouts() { 
        try {

            // converts the observable get request into a promise by fetching the last value from it and then awaits the promise
            this.layouts = await lastValueFrom(this.http.get<ColumnLayout[]>("/api/column-layouts"));

            // sorts our layouts to make sure Default is always first in the list
            this.layouts.sort((a, b) => {
                // numerical descending sort by id
                return a.id - b.id;
            });
        }

        // catches any errors that might be thrown
        catch(e) {
            this.layouts = [];
        }
    }

    // you have to attach async to a function to use await, which waits for the resolution of a promise
    // would recommend looking up Async Await
    // creates a column layout using the related endpoint in the back-end and a post request
    async createColumnLayout(columnLayout: ColumnLayout) { 
        try {
            // converts the observable get request into a promise by fetching the last value from it and then awaits the promise
            return await lastValueFrom(this.http.post<ColumnLayout>("/api/column-layouts", columnLayout));
        }

        // catches any errors that might be thrown
        catch(e) {
            console.error(e);
            return null;
        }
    }

    // updates a column layout using the related endpoint in the back-end and a put request
    updateColumnLayout(columnLayout: ColumnLayout) { 
        return this.http.put<ColumnLayout>("/api/column-layouts/" + columnLayout.id, columnLayout);
    }

    // deletes a column layout using the related endpoint in the back-end and a delete request
    deleteColumnLayout(id: number) { 
        return this.http.delete("/api/column-layouts/" + id);
    }


}