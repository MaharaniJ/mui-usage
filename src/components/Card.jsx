import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { IconButton, Rating } from "@mui/material";

function TourCard() {
  return (
    <Card
      sx={{
        maxWidth: 600,
        marginBottom: 4,
        "&:hover": {
            transform: "scale(1.05)", // Enlarge the image on hover
          },
      }}
    >
      <CardHeader title="Select your Tourist spot" />
      <CardMedia
        component="img"
        height="194"
        image={require("../assets/1.png")}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Best Tourist Spot
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Rating
          name="simple-controlled"
          value={4}
          //   onChange={(event, newValue) => {
          // setValue(newValue);
          //   }}
        />
      </CardActions>
    </Card>
  );
}

export default TourCard;
