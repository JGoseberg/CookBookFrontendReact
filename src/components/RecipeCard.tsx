import MainLayout from "../layouts/MainLayout";
import {
    Avatar,
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton, Rating,
    Typography
} from "@mui/material";
import {red} from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {CompareArrows} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {fetchRecipeById, IRecipe} from "../api/recipesApi";
import { ImageHandler} from "../utils/ImageHandler";
import {useEffect, useState} from "react";
import {fetchRecipeImageById} from "../api/RecipeImageApi";


interface ImageData {
    image: string; //Base64
    mimeType: string; //ContentType
}

interface CardProps {
    id: number;
    title: string;
    image?: string;
    details: string;
    rating: number;
    duration: string;
}

const RecipeCard: React.FC<CardProps> = ({id, title, image, details, rating, duration}) => {
    const navigate = useNavigate();

    const [recipeImage, setrecipeImage] = useState<ImageData | null>(null);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchData = async() => {
            try {
                const imageData = await fetchRecipeImageById(id.toString())

                console.log("Fetched imageData from API:", imageData);

                setrecipeImage({
                    image: imageData.fileContents,
                    mimeType: imageData.contentType
                });

            } catch (err){
                setError('Failed to fetch recipe or image');
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [id]);

    const handleCardClick = () => {
        navigate(`/recipe/${id}`)
    }
    return (
        <Card sx={{
            width: 225
        }}
              onClick={ handleCardClick }
        >

            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="avatar">
                        JG
                    </Avatar>
                }
                action={
                <IconButton aria-label="settings" >
                    <MoreVertIcon />
                </IconButton>
                }
                title={title}
                subheader={duration}
                />

            <CardMedia
                component="img"
                sx={{ display: "flex", marginLeft: "auto", marginRight: "auto", maxWidth: 150 }}
                height="150"
                image={recipeImage ? `data:${recipeImage.mimeType};base64,${recipeImage.image}` : image}
                alt={{title} + "image"}
                >
            </CardMedia>

            <CardContent>
                <Typography variant="body2" component="div">
                    {details}
                </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{display: 'flex', justifyContent: 'space-between'}}>
                <IconButton aria-label="add to favorites" onClick={() => {}}>
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="compare list" onClick={() => {}}>
                    <CompareArrows />
                </IconButton>
                <Rating
                    name="rating"
                    value={rating}
                    readOnly
                />
            </CardActions>
        </Card>
    )
}

export default RecipeCard;