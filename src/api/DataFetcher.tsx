import React, {useEffect, useState} from "react";
import axios from "axios";
import {CircularProgress, Typography } from "@mui/material";

interface Recipe {
    id: number;
    name: string;
    description: string;
    ingredients: string[];
}

const DataFetcher: React.FC = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null)


    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get<Recipe[]>("https://localhost:7010/api/Recipes/GetAllRecipes");
            console.log(response.data);
            setRecipes(response.data);
        } catch (error) {
            setError("Failed to get recipes");
        } finally {
            setLoading(false);
        }
    };

    fetchData();
}, []);

    if (loading) return <CircularProgress />;
    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <div>
            <Typography variant="h2">Recipe List</Typography>
            {recipes.length > 0 ? (
                <ul>
                    {recipes.map((recipe: Recipe) => (
                        <li key={recipe.id}>
                            <strong>{recipe.name}</strong>: {recipe.description}
                        </li>
                    ))}
                </ul>
            ) : (
            <p> No Recipes found.</p>
            )}
        </div>
    );
};

export default DataFetcher;

