import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ColumnLayout } from '../model/column-layout';
import { UserInfo } from '../model/user-info';

@Injectable({
  providedIn: 'root'
})
export class ColumnLayoutService {

    layouts: ColumnLayout[] = [];

    constructor(private http: HttpClient) { 

    }

    getColumnLayoutById(id: string) {
        return this.http.get<ColumnLayout>("/api/column-layouts/" + id);
    }

    async loadColumnLayouts() { 
        try {
            this.layouts = await lastValueFrom(this.http.get<ColumnLayout[]>("/api/column-layouts"));
        }
        catch(e) {
            this.layouts = [];
        }
    }

    async createColumnLayout(columnLayout: ColumnLayout) { 
        try {
            return await lastValueFrom(this.http.post<ColumnLayout>("/api/column-layouts", columnLayout));
        }
        catch(e) {
            console.error(e);
            return null;
        }
    }

    updateColumnLayout(columnLayout: ColumnLayout) { 
        return this.http.put<ColumnLayout>("/api/column-layouts/" + columnLayout.id, columnLayout);
    }

    deleteColumnLayout(id: number) { 
        return this.http.delete("/api/column-layouts/" + id);
    }


}