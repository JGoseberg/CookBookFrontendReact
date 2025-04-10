// src/components/SingleRecipeImage.tsx
import React from 'react';

interface SingleRecipeImageProps {
    image: {
        mimeType: string;
        imageData: string;
    };
    altText?: string; // Optional alt text for better accessibility
}

const SingleRecipeImage: React.FC<SingleRecipeImageProps> = ({ image, altText }) => {
    const { mimeType, imageData } = image;

    return (
        <img
            src={`data:${mimeType};base64,${imageData}`}
            alt={altText || "Recipe Image"} // Default alt text if not provided
            onError={(e) => {
                e.currentTarget.src = '/placeholder.png'; // Fallback to placeholder image if error
                e.currentTarget.alt = 'Image not available'; // Provide fallback alt text
            }}
            loading="lazy" // Enables lazy loading for better performance
            style={{
                maxWidth: '100%',
                maxHeight: '300px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            }}
        />
    );
};

export default SingleRecipeImage;
