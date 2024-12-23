import axios from "axios";

export interface IRecipes {
    id: number;
    name: string;
    description: string;
    image: string;
    rating: number;
    duration: string;
}

export interface IRecipe {
    id: number;
    name: string;
    description: string;
    instruction: string;
}



export const fetchRecipes = async () => {
    const response = await axios.get<IRecipes[]>("https://localhost:7010/api/Recipes/GetAllRecipes");
    console.log(response);
    return response.data;
};

export const fetchRecipeById = async (id: string | undefined) => {
    const response = await axios.get<IRecipe>(`https://localhost:7010/api/Recipes/GetRecipeById/${id}`);
    return response.data;
}

