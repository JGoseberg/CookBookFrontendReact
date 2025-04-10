// src/components/RecipeImageFetcher.tsx

import React, { useEffect, useState } from 'react';
import SingleRecipeImage from './SingleRecipeImage';
import { CircularProgress, Box, Typography } from '@mui/material';

interface RecipeImage {
    mimeType: string;
    imageData: string;
}

interface RecipeImageFetcherProps {
    recipeId: number;
}

const RecipeImageFetcher: React.FC<RecipeImageFetcherProps> = ({ recipeId }) => {
    const [image, setImage] = useState<RecipeImage | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await fetch(
                    `https://localhost:7010/api/RecipeImage/GetRecipeImages?recipeId=${recipeId}`
                );

                if (!response.ok) {
                    throw new Error(`Failed to fetch images: ${response.statusText}`);
                }

                const images: RecipeImage[] = await response.json();
                if (images.length > 0) {
                    setImage(images[0]); // Use the first image or add logic to select the appropriate image
                } else {
                    setError('No images available for this recipe.');
                }
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchImage();
    }, [recipeId]);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="150px">
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box>
                <Typography color="error">{error}</Typography>
            </Box>
        );
    }

    return (
        <Box>
            {image ? (
                <SingleRecipeImage image={image} />
            ) : (
                <Typography>No image available for this recipe.</Typography>
            )}
        </Box>
    );
};

export default RecipeImageFetcher;
