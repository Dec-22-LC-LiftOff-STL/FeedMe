import { ChoiceColumn } from "./choice-columns";

// defining what our back-end entity looks like to reference in code
export interface ColumnLayout {
    id?: number;
    name: string;
    choiceColumns?: ChoiceColumn[];
}