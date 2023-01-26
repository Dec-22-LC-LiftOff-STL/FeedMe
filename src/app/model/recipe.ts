// defining what our back-end entity looks like to reference in code, one of the nested interfaces in RecipeResult
export interface Recipe {
    label: string;
    image: string;
    url: string;
    ingredientLines: string[];
    cuisineType: string;
    mealType: string;
    dishType: string;
}

// another nested interface to be used in RecipeLinks
export interface RecipeLink {
    title: string;
    href: string;
}

// RecipeLink interface used here
export interface RecipeLinks {
    self: RecipeLink;
}

// RecipeResult interface made up of RecipeLink and Recipe interfaces
export interface RecipeResult {
    recipe: Recipe;
    _links: RecipeLinks;
}