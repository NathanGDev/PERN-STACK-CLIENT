import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Trending from "./Trending";
import SearchDisplay from "./SearchDisplay";

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    margin: "auto",
  },
  Media: {
    width: "100%",
    height: "100%",
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
  console.log(props);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.Media}
          component="img"
          alt={props.movie.title}
          height="200"
          image={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
          title={props.movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.movie.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Rating: {props.movie.vote_average}/ 10
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Description
        </Button>
        <Button size="small" color="primary">
          Delete
        </Button>
        <Button size="small" color="primary">
          Update
        </Button>
      </CardActions>
    </Card>
  );
}
