import { ColumnLayout } from "./column-layout";

export interface ChoiceColumn {
    id?: number;
    name: string;
    items: string[];
    columnLayout?: ColumnLayout;
}