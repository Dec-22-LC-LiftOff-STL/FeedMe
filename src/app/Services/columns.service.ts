import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

    createColumn(choiceColumn: ChoiceColumn) { 
        return this.http.post<ChoiceColumn>("/api/choiceColumns", choiceColumn);
    }

    updateColumn(choiceColumn: ChoiceColumn) { 
        return this.http.put<ChoiceColumn>("/api/choiceColumns/" + choiceColumn.id, choiceColumn);
    }

    deleteColumn(id: number) { 
        return this.http.delete("/api/choiceColumns/" + id);
    }
}