// src/pages/RecipeDetailPage.tsx

import { useParams } from 'react-router-dom';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { fetchRecipeById, IRecipe } from '../api/recipesApi';
import { fetchRecipeImageById, IRecipeImage } from '../api/RecipeImageApi';
import { ImageHandler } from '../utils/ImageHandler';

interface RecipeDetail extends IRecipe {
    image: string;  // Base64 string of the image
    mimeType: string;  // Content type of the image (e.g., image/jpeg, image/png)
}

const RecipeDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [recipe, setRecipeDetail] = useState<RecipeDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch recipe details first
                const recipeData = await fetchRecipeById(id);

                // Fetch recipe image once the recipe data is available
                const imageData = await fetchRecipeImageById(id);

                // Combine recipe data with image data
                setRecipeDetail({
                    ...recipeData,
                    image: imageData.fileContents,  // Base64 string of the image
                    mimeType: imageData.contentType,  // Content type (e.g., image/jpeg)
                });
            } catch (err) {
                setError('Failed to fetch recipe or image');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) return <CircularProgress />;
    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <Box>
            <Typography variant="h2">{recipe?.name}</Typography>
            <Typography variant="body2">{recipe?.description}</Typography>
            <Typography variant="body2">{recipe?.instruction}</Typography>

            {/* Display the recipe image */}
            {recipe?.image && recipe?.mimeType ? (
                <ImageHandler imageData={recipe.image} mimeType={recipe.mimeType} />
            ) : (
                <div>No image available</div>
            )}
        </Box>
    );
};

export default RecipeDetailPage;
