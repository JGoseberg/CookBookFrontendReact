import React from "react";

interface Base64ImageProps {
    base64String: string;
    mimeType: string;
}

const Base64Image: React.FC<Base64ImageProps> = ({base64String, mimeType}) => {
    const imageSrc = `data:${mimeType};base64,${base64String}`;
    return <img alt="Recipe Image" src={imageSrc} />;
}

export default Base64Image;