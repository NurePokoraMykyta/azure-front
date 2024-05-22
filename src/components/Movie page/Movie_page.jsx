import "./Movie_page.css"
import Movie_header from "./MovieHeader/Movie_header";
import MovieMain from "./MovieMain/MovieMain";
import MovieBottom from "./MovieBottom/MovieBottom";
import {useEffect, useState} from "react";
import {Outlet, useParams} from "react-router-dom";

const Movie_page = () => {
    const [MovieId, setMovieId] = useState("")
    const {movieId} = useParams();
    const [film, setFilm] = useState({})
    useEffect(() => {
        const movie = async(movieId) => {
            // поміняти порт на гейтвей
            const response = await fetch (`http://localhost:5000/api/movies/${movieId}`, {
                method: "GET"
            });
            const data = await response.json();
            setFilm(data);
        }
        console.log(movieId)
        movie(movieId);
    }, [movieId]);


    const movies = [
        {
            id: 0,
            title: 'lol',
            description: 'test movie',
            oscar: false
        },
        {
            id: 1,
            title: "Назва фільму",
            description: "Главный герой — 27-летний Илья Горюнов, семь лет отсидевший в тюрьме по ложному обвинению в распространении наркотиков. Когда Илья выходит на свободу, он понимает, что прежняя жизнь, по которой он тосковал, разрушена, и вернуться к ней он больше не сможет. Хотя он не собирался мстить человеку, который отправил его в тюрьму, другого выхода теперь нет.",
            oscar: true
        },
        {
            id: 2,
            title: "Inception",
            description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
            oscar: true
        },
        {
            id: 3,
            title: "The Shawshank Redemption",
            description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            oscar: false
        },
        {
            id: 4,
            title: "Forrest Gump",
            description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
            oscar: true
        },
        {
            id: 5,
            title: "The Dark Knight",
            description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
            oscar: false
        },
        {
            id: 6,
            title: "Pulp Fiction",
            description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            oscar: true
        },
        {
            id: 7,
            title: "The Lord of the Rings: The Return of the King",
            description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
            oscar: true
        },
        {
            id: 8,
            title: "Schindler's List",
            description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
            oscar: true
        },
        {
            id: 9,
            title: "The Matrix",
            description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
            oscar: false
        },
        {
            id: 10,
            title: "Gladiator",
            description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
            oscar: true
        }
    ];
    const nextMovie = () => {
        setMovieId(prevId => prevId + 1);

    }

    const previousMovie = () => {
        setMovieId(prevId => prevId - 1);
    }
    const movieData = movies.find(movie => movie.id === MovieId);
    console.log(movieData)
    return (
        <div className="Movie_Page">
            <div className="movie_container">
                <Movie_header/>
                {film !== undefined ? (
                    <MovieMain
                        id={film.id}
                        title={film.title}
                        description={film.description}
                        oscar={film.oscar}
                        movie = {movieId}
                    />
                ) : (
                    <></>
                )}

                <MovieBottom
                    prev={(MovieId > 0) ? previousMovie : null}
                    next={(MovieId < movies.length - 1) ? nextMovie : null}
                />
            </div>
        </div>
    );
}

export default Movie_page;