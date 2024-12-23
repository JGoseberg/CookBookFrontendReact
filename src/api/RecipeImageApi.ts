// src/api/recipeImageApi.ts

export interface IRecipeImage {
    imageData: string;  // Base64 string of the image
    mimeType: string;   // Content type of the image (e.g., image/jpeg, image/png)
}

export const fetchRecipeImageById = async (id: string | undefined): Promise<IRecipeImage> => {
    const response = await fetch(`https://localhost:7010/api/RecipeImage/GetRecipeImages?recipeId=${id}`);
    console.log(response);
    if (!response.ok) {
        throw new Error('Failed to fetch image');
    }
    const data = await response.json();
    return {
        imageData: data.imageData, // Base64 string of the image
        mimeType: data.mimeType,   // Content type of the image (e.g., image/jpeg)
    };
};
