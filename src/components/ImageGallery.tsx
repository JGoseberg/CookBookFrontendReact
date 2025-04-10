import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface RecipeImage {
    imageData: string; // Base64 encoded image data
    mimeType: string;  // Mime type of the image
}

interface ImageGalleryProps {
    recipeId: number; // Recipe ID to fetch images for
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ recipeId }) => {
    const [images, setImages] = useState<RecipeImage[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get<RecipeImage[]>(`https://localhost:7010/api/RecipeImage/GetRecipeImages?recipeId=${recipeId}`);
                setImages(response.data);
            } catch (err) {
                setError('Failed to fetch images');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, [recipeId]);

    if (loading) return <p>Loading images...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            {images.length > 0 ? (
                images.map((image, index) => (
                    <img
                        key={index}
                        src={`data:${image.mimeType};base64,${image.imageData}`}
                        alt={`Recipe Image ${index}`}
                        style={{ width: '100%', maxWidth: '300px', margin: '10px' }} // Customize styles as needed
                    />
                ))
            ) : (
                <p>No images found for this recipe.</p>
            )}
        </div>
    );
};

export default ImageGallery;
