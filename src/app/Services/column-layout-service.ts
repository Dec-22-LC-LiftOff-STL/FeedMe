import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

    loadColumnLayouts() { 
        return this.http.get<ColumnLayout[]>("/api/column-layouts").subscribe({
            next: (data) => {
                this.layouts = data;
            }
        });
    }

    createColumnLayout(columnLayout: ColumnLayout) { 
        return this.http.post<ColumnLayout>("/api/column-layouts/", columnLayout);
    }

    updateColumnLayout(columnLayout: ColumnLayout) { 
        return this.http.put<ColumnLayout>("/api/column-layouts/" + columnLayout.id, columnLayout);
    }

    deleteColumnLayout(id: number) { 
        return this.http.delete("/api/column-layouts/" + id);
    }


}