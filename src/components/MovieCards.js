import React from "react";
import Button from "react-bootstrap/Button";
import "./Box.css"
import Card from "react-bootstrap/Card";

const MovieCards = () => {
  const Movies = [
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_.jpg",
      movieName: "IronMan",
      rating: "Rating 8",
      releasedDate: "RELEASED_DATE - 05/02/2008",
    },
    {
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fe0f63104621721.5f675c7a0b983.jpg",
      movieName: "IronMan 2",
      rating: "Rating 9",
      releasedDate: "RELEASED_DATE - 10/05/2010",
    },
    {
      image:
        "https://i.pinimg.com/originals/b6/a3/ad/b6a3adb35d8b51109c01372e0490deac.jpg",
      movieName: "IronMan 3",
      rating: "Rating 9",
      releasedDate: "RELEASED_DATE - 10/05/2013",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BZGIzNWYzN2YtMjcwYS00YjQ3LWI2NjMtOTNiYTUyYjE2MGNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      movieName: "X-MEN",
      rating: "Rating 9",
      releasedDate: "RELEASED_DATE - 05/05/2023",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
      movieName: "WONDER WOMAN",
      rating: "Rating 9",
      releasedDate: "RELEASED_DATE - 01/01/2019",
    },
    {
      image:
        "https://www.themoviedb.org/t/p/original/3jeBylAE9zuC2BY8bF8w6xmj0lb.jpg",
      movieName: "HULK",
      rating: "Rating 7",
      releasedDate: "RELEASED_DATE - 01/01/2008",
    },
    {
      image:
        "https://images-cdn.ubuy.co.in/1161Z6QO-premiumprints-marvel-captain-america.jpg",
      movieName: "CAPTAIN AMERICA",
      rating: "Rating 10",
      releasedDate: "RELEASED_DATE - 04/04/2014",
    },
    {
      image:
        "https://www.joblo.com/wp-content/uploads/2012/07/ant-man-poster-1.jpg",
      movieName: "ANT-MAN",
      rating: "Rating 6",
      releasedDate: "RELEASED_DATE - 01/01/2015",
    },
    {
      image:
        "https://www.themoviedb.org/t/p/original/86BnliVDBo2TjKmrgQTJIPHxAKd.jpg",
      movieName: "XXX",
      rating: "Rating 9",
      releasedDate: "RELEASED_DATE - 05/08/2012",
    },
    {
      image: "https://m.media-amazon.com/images/I/91OMqjzH-pL._SY550_.jpg",
      movieName: "DORA",
      rating: "Rating 5",
      releasedDate: "RELEASED_DATE - 01/08/2018",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0969/9128/products/Joker_-_Put_On_A_Happy_Face_-_Joaquin_Phoenix_-_Hollywood_English_Movie_Poster_3_1f3f78b1-3366-4394-a8b2-4d8431592dac.jpg?v=1579504957",
      movieName: "JOKER",
      rating: "Rating 10",
      releasedDate: "RELEASED_DATE - 05/08/2020",
    },
    {
      image: "https://m.media-amazon.com/images/I/71X32U+goqL._SL1200_.jpg",
      movieName: "1917",
      rating: "Rating 7",
      releasedDate: "RELEASED_DATE - 06/01/2021",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/61GVpjGTQsL._AC_SY580_.jpg",
      movieName: "WOLVES",
      rating: "Rating 9",
      releasedDate: "RELEASED_DATE - 06/01/2022",
    },
    {
      image:
        "https://images.mid-day.com/images/images/2016/mar/04London-Has-Fallen.jpg",
      movieName: "LONDON HAS FALLEN",
      rating: "Rating 8",
      releasedDate: "RELEASED_DATE - 07/05/2019",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdGyQPsHJZUYLT0P4Re2Pm_zeK8C4o8Vfw2Q&usqp=CAU",
      movieName: "BLACK ADAM",
      rating: "Rating 9",
      releasedDate: "RELEASED_DATE - 30/10/2015",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg",
      movieName: "SPIDER-MAN",
      rating: "Rating 9",
      releasedDate: "RELEASED_DATE - 25/11/2022",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIHirCi3drRKLL-3ETvWt4c7KW8GOAL-kD9AaUKxcm9WSlKFWVqtXhT6rU_yeTL0mX02M&usqp=CAU",
      movieName: "WORLD WAR Z",
      rating: "Rating 10",
      releasedDate: "RELEASED_DATE - 10/11/2016",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
      movieName: "BAT-MAN",
      rating: "Rating 9",
      releasedDate: "RELEASED_DATE - 22/10/2013",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Prom_Night.jpg/220px-Prom_Night.jpg",
      movieName: "PROM NIGHT",
      rating: "Rating 5",
      releasedDate: "RELEASED_DATE - 22/10/2009",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi4JF6v2eQncQkQlQWO1e107Gcqk9jA2-_-g&usqp=CAU",
      movieName: "EX MACHINE",
      rating: "Rating 6",
      releasedDate: "RELEASED_DATE - 20/01/2008",
    },
  ];

  const renderMovies = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Card.Img variant="top" src={card.image} />
        <Card.Body>
          <Card.Title>{card.movieName}</Card.Title>
          <Button>
            <Card.Text>{card.rating}</Card.Text>
          </Button>
          <Card.Text>{card.releasedDate}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return <div className="grid">{Movies.map(renderMovies)}</div>;
};
export default MovieCards;
