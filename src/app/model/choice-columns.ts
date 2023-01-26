import { ColumnLayout } from "./column-layout";

// defining what our back-end entity looks like to reference in code
export interface ChoiceColumn {
    id?: number;
    name: string;
    items: string[];
    columnLayout?: ColumnLayout;
}