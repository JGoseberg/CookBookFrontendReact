// src/pages/RecipePage.tsx
import React from 'react';
import {
    Avatar,
    Box,
    Button,
    Card, CardActions, CardContent, CardHeader,
    CardMedia,
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

interface RecipePageProps {
    id: number;
    title: string;
    image: string;
    details: string;
    rating: number;
    duration: string;
}

const sampleData: RecipePageProps[] = [
    {
        id: 1,
        title: 'Sample 1',
        image: 'https://via.placeholder.com/150',
        details: 'Description sadfasdfasdfdsa asdfsadfasdfdsfa',
        rating: 5,
        duration: '10 minutes',
    },
    {
        id: 2,
        title: 'Sample 2',
        image: 'https://via.placeholder.com/150',
        details: 'Lorem ipsum',
        rating: 4,
        duration: '20 minutes',
    },
    {
        id: 3,
        title: 'Sample 3',
        image: 'https://via.placeholder.com/150',
        details: 'Lorem ipsum',
        rating: 3,
        duration: '10 minutes',
    },
    {
        id: 4,
        title: 'Sample 4',
        image: 'https://via.placeholder.com/150',
        details: 'Lorem ipsum',
        rating: 2,
        duration: '10 minutes',
    },
    {
        id: 5,
        title: 'Sample 1',
        image: 'https://via.placeholder.com/150',
        details: 'Lorem ipsum',
        rating: 5,
        duration: '10 minutes',
    },
    {
        id: 6,
        title: 'Sample 2',
        image: 'https://via.placeholder.com/150',
        details: 'Lorem ipsum',
        rating: 4,
        duration: '20 minutes',
    },
    {
        id: 7,
        title: 'Sample 3',
        image: 'https://via.placeholder.com/150',
        details: 'Lorem ipsum',
        rating: 3,
        duration: '10 minutes',
    },
    {
        id: 8,
        title: 'Sample 4',
        image: 'https://via.placeholder.com/150',
        details: 'Lorem ipsum',
        rating: 2,
        duration: '10 minutes',
    }
];

export default function RecipeReviewCard(){

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
                {sampleData.map((item, index) => (
                    <Grid2>
                        <RecipeCard
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            details={item.details}
                            rating={item.rating}
                            duration={item.duration}
                            />
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    )
};



