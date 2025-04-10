import React from "react";
import Base64Image from "./Base64Image";

const StaticBase64Image = () => {
    const base64ImageString = 'iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';

    const mimeType = 'image/png';

    return (
        <div>
            <Base64Image base64String={base64ImageString} mimeType={mimeType} />
        </div>
    );
};

export default StaticBase64Image;