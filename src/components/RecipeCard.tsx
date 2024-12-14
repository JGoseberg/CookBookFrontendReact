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


interface CardProps {
    id: number;
    title: string;
    image: string;
    details: string;
    rating: number;
    duration: string;
}

const RecipeCard: React.FC<CardProps> = ({id, title, image, details, rating, duration}) => {
    return (
        <Card sx={{
            width: 225
        }}>
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
                image={image}
                alt={{title} + "image"}
                />
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