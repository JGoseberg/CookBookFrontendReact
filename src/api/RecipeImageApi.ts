// src/api/recipeImageApi.ts

export interface IRecipeImage {
    fileContents: string;  // Base64 string of the image
    contentType: string;   // Content type of the image (e.g., image/jpeg, image/png)
}

export const fetchRecipeImageById = async (id: string | undefined): Promise<IRecipeImage> => {
    const response = await fetch(`https://localhost:7010/api/RecipeImage/GetRecipeImages?recipeId=${id}`);
    console.log(response);
    if (!response.ok) {
        throw new Error('Failed to fetch image');
    }

    const data = await response.json();
    console.log(data);
    return {
        fileContents: data.fileContents, // Base64 string of the image
        contentType: data.contentType,   // Content type of the image (e.g., image/jpeg)
    };
};
