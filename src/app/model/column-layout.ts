import { ChoiceColumn } from "./choice-columns";

export interface ColumnLayout {
    id?: number;
    name: string;
    choiceColumns?: ChoiceColumn[];
}