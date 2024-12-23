// src/pages/RecipePage.tsx
import React, {useEffect, useState} from 'react';
import {
    Avatar,
    Box,
    Button,
    Card, CardActions, CardContent, CardHeader,
    CardMedia, CircularProgress,
    Grid2,
    IconButton,
    IconButtonProps,
    Link,
    styled,
    Typography
} from '@mui/material';
import {red} from "@mui/material/colors";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RecipeCard from '../components/RecipeCard';
import {fetchRecipes, IRecipes} from "../api/recipesApi";

const RecipePage: React.FC = () => {
    const [recipes, setRecipes] = useState<IRecipes[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getRecipes = async () => {
            try {
                const data = await fetchRecipes();
                setRecipes(data);
            } catch (error) {
                setError("Failed to Load")
            } finally {
                setLoading(false)
            }
        };

        getRecipes();
    }, []);

    if (loading) return <CircularProgress />;

    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <Box
            sx = {{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                paddingTop: '5rem',
                paddingBottom: '5rem',
                paddingLeft: '5rem',
                paddingRight: '5rem',
            }}
            >
            <Grid2 container spacing={2} justifyContent={"center"} columnSpacing={{xs: 3, sm: 3, md: 3, lg: 6, xl: 3}} >
                {recipes.map((item) => (
                    <Grid2>
                        <RecipeCard
                            id={item.id}
                            title={item.name}
                            image={item.image}
                            details={item.description}
                            rating={item.rating}
                            duration={item.duration}
                            />
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    )
};

export default RecipePage;

