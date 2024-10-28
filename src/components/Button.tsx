import React from "react";
import Button from "@mui/material/Button"

interface CustomButtonProps {
    label: string;
    onClick: () => void;
    variant?: "text" | "outlined" | "contained";
    color?: 'primary' | 'secondary' | 'inherit' | 'success' | 'error' | 'info' | 'warning';
}

const CustomButton: React.FC<CustomButtonProps> = ({label, onClick, variant = "contained", color = "primary"}) => {
    return (
        <Button variant={variant} color={color} onClick={onClick}>
            {label}
        </Button>
    );
};

export default CustomButton;