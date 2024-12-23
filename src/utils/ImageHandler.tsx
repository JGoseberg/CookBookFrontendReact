// src/utils/ImageHandler.tsx

import React from 'react';

interface ImageHandlerProps {
    imageData: string;   // Base64 string of the image
    mimeType: string;    // Content type (e.g., image/jpeg, image/png)
}

export const ImageHandler: React.FC<ImageHandlerProps> = ({ imageData, mimeType }) => {
    return (
        <img
            src={`data:${mimeType};base64,${imageData}`}
            alt="Recipe Image"
            style={{
                maxWidth: '100%',
                maxHeight: '300px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            }}
        />
    );
};
