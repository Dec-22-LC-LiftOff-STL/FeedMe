import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ChoiceColumn } from '../model/choice-columns';

@Injectable({
  providedIn: 'root'
})
export class ColumnsService {
    constructor(private http: HttpClient) { 

    }

    getColumns() { 
        return this.http.get<ChoiceColumn[]>("/api/choiceColumns");
    }

    async createColumn(choiceColumn: ChoiceColumn) {
        try {
            return await lastValueFrom(this.http.post<ChoiceColumn>("/api/choiceColumns", choiceColumn));
        } 
        catch(e) {
            console.error(e);
            return null;
        }
    }

    updateColumn(choiceColumn: ChoiceColumn) { 
        return this.http.put<ChoiceColumn>("/api/choiceColumns/" + choiceColumn.id, choiceColumn);
    }

    deleteColumn(id: number) { 
        return this.http.delete("/api/choiceColumns/" + id);
    }
}