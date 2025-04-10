import React, { useEffect, useState } from 'react';

interface ImageFetcherProps {
    recipeId: number; // Prop to accept the recipe ID
}

const ImageFetcherAdd: React.FC<ImageFetcherProps> = ({ recipeId }) => {
    const [imageData, setImageData] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchImageData = async () => {
            try {
                const response = await fetch(`https://localhost:7010/api/RecipeImage/AddRecipeImage?${recipeId}`, {
                    method: 'POST', // Ensure you are using the correct method
                    headers: {
                        'Content-Type': 'multipart/form-data', // Adjust headers as needed
                    },
                }); // Use the recipe ID in the endpoint
                if (!response.ok) {
                    throw new Error(`Network response was not ok ${response.statusText} ${response.status}`);
                }
                const data = await response.json();
                setImageData(data.imageData);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Something went wrong');
            } finally {
                setLoading(false);
            }
        };

        fetchImageData();
    }, [recipeId]); // Dependency on recipeId

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {imageData && (
                <img
                    src={`data:image/png;base64,${imageData}`} // Use the image data in base64 format
                    alt="Recipe"
                />
            )}
        </div>
    );
};

export default ImageFetcherAdd;