import React, { useState, useEffect } from "react";
import {
  CardImg,
  CardTitle,
  CardBody,
  CardSubtitle,
  CardText,
} from "reactstrap";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import APIURL from "../helpers/environment";

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

const FavoriteCard = (props) => {
  const [favorite, setFavorite] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const [poster, setPoster] = useState("");
  const [data, setData] = useState("");
  const [owner, setOwner] = useState("");

  const classes = useStyles();

  const updateMovie = () => {
    fetch(`${APIURL}/api/movies/update/:id`, {
      method: "PUT",
      body: JSON.stringify({
        movie: {
          favorite: favorite,
          title: title,
          description: description,
          year: year,
          poster: poster,
          rating: rating,
        },
        where: {
          id: data,
          owner: owner,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => {
        res.json();
      })
      .then((json) => {
        console.log(props.testData.movie);

        setFavorite(false);
        setTitle(props.testData.movie.title);
        setDescription(props.testData.movie.overview);
        setYear(props.testData.movie.release_date);
        setRating(props.testData.movie.vote_average);
        setPoster(props.testData.movie.poster_path);
        setOwner(props.testData.movie.owner);
        setData(props.testData.movie.id);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {props.testData.movie.map((mov) => {
        return (
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.Media}
                component="img"
                alt={mov.title}
                height="200"
                image={`https://image.tmdb.org/t/p/w500${mov.poster}`}
                title={mov.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {mov.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Rating: {mov.rating} / 10
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Released: {mov.year}
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
              <Button size="small" color="primary" onClick={updateMovie}>
                Update
              </Button>
            </CardActions>
          </Card>
          // <CardBody>
          //   <CardImg
          //     top
          //     width="100%"
          //     src={`https://image.tmdb.org/t/p/w500${mov.poster}`}
          //     alt="Card image"
          //   />
          //   <CardTitle>{mov.title}</CardTitle>
          //   <CardText>{mov.description}</CardText>
          //   <CardText>{mov.year}</CardText>
          //   <CardSubtitle>{mov.rating} out of 5!</CardSubtitle>
          // </CardBody>
        );
      })}
    </>
  );
};

export default FavoriteCard;
