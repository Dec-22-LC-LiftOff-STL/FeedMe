// defining what our back-end entity looks like to reference in code
export interface Recipe {
    uri: string;
    label: string;
    image: string;
    url: string;
    ingredientLines: string[];
    cuisineType: string;
    mealType: string;
    dishType: string;
}