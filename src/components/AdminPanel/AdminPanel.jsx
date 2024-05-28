import "./AdminPanel.css";
import {useEffect, useState} from "react";
import {Button, TextField} from "@mui/material";
import {grey} from "@mui/material/colors";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const AdminPanel = ({id, title, description, oscar, movie}) => {
    const category = {
        Movies: 'movies',
        Actors: 'actors'
    }

    const [moviesList, setMoviesList] = useState([])

    useEffect(() => {
        const getAllMovies = async () => {
            const response = await fetch(`http://localhost:5000/api/movies`, {
                method: "GET"
            });
            const data = await response.json();
            setMoviesList(data)
        }
        getAllMovies()
    }, []);

    const [actors, setActors] = useState([]);
    useEffect(() => {
        const getAllActors = async (movieId) => {
            const response = await fetch(`http://localhost:5001/api/actors`, {
                method: "GET"
            });
            const data = await response.json();
            setActors(data)
        }
        console.log(movie);
        getAllActors(movie)
    }, [movie]);

    const [adminPage, setAdminPage] = useState(category.Movies)
    const [newMovie, setNewMovie] = useState({
        title: '',
        description: '',
        img: '',
        releaseDate: '',
        rating: 0
    })
    const [newActor, setNewActor] = useState({
        name: '',
        birthDate: '',
        birthCity: '',
        image: '',
        biography: ''
    })

    const handleInputChange = (e, type) => {
        if (type === 'movie') {
            setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
        } else {
            setNewActor({ ...newActor, [e.target.name]: e.target.value })
        }
    }

    const handleAddActor = () => {
        const newId = actors.length + 1
        const newActorObj = { ...newActor, id: newId }
        setActors([...actors, newActorObj])
        setNewActor({
            name: '',
            birthDate: '',
            birthCity: '',
            image: '',
            biography: ''
        })
    }

    const handleAddMovie = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5050/api/admin/movies/add`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        });
        const data = await response.json();
        return data;
    }

    return (
        <div className="admin_page">
            <div className="admin_page_container">
                <Button onClick={() => setAdminPage(category.Movies)}>Фільми</Button>
                <Button onClick={() => setAdminPage(category.Actors)}>Актори</Button>
                {adminPage === category.Movies ? (
                    <div className="movie_list">
                        <h3>Назва фільму</h3>
                        <input
                            type="text"
                            name="title"
                            value={newMovie.title}
                            onChange={(e) => handleInputChange(e, 'movie')}
                        />
                        <h3>Опис фільму</h3>
                        <textarea
                            name="description"
                            value={newMovie.description}
                            onChange={(e) => handleInputChange(e, 'movie')}
                        />
                        <h3>Постер фільму</h3>
                        <input
                            type="text"
                            name="img"
                            value={newMovie.img}
                            onChange={(e) => handleInputChange(e, 'movie')}
                        />
                        <h3>Дата релізу</h3>
                        <input
                            type="date"
                            name="releaseDate"
                            value={newMovie.releaseDate}
                            onChange={(e) => handleInputChange(e, 'movie')}
                        />
                        <h3>Рейтинг</h3>
                        <input
                            type="number"
                            name="rating"
                            value={newMovie.rating}
                            onChange={(e) => handleInputChange(e, 'movie')}
                        />
                        <Button onClick={handleAddMovie}>Додати фільм</Button>
                        {moviesList.map(movie => (
                            <div className="movie_map" key={movie.id}>
                                <img src={movie.img} alt="movieImage"/>
                                <div className="movie_info">
                                    <h2>{movie.title}</h2>
                                    <h5>{movie.description}</h5>
                                    <h5>{movie.releaseDate}</h5>
                                    <h5>Рейтинг: {movie.rating}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="movie_list">
                        <h2>Додати актора</h2>
                        <input
                            type="text"
                            name="name"
                            placeholder="Ім'я та прізвище"
                            value={newActor.name}
                            onChange={(e) => handleInputChange(e, 'actor')}
                        />
                        <input
                            type="date"
                            name="birthDate"
                            placeholder="Дата народження"
                            value={newActor.birthDate}
                            onChange={(e) => handleInputChange(e, 'actor')}
                        />
                        <input
                            type="text"
                            name="birthCity"
                            placeholder="Місце народження"
                            value={newActor.birthCity}
                            onChange={(e) => handleInputChange(e, 'actor')}
                        />
                        <input
                            type="text"
                            name="image"
                            placeholder="URL зображення"
                            value={newActor.image}
                            onChange={(e) => handleInputChange(e, 'actor')}
                        />
                        <textarea
                            name="biography"
                            placeholder="Біографія"
                            value={newActor.biography}
                            onChange={(e) => handleInputChange(e, 'actor')}
                        />
                        <Button onClick={handleAddActor}>Додати актора</Button>
                        {Array.isArray(actors) && actors.length > 0 ? (
                            actors.map(actor => (
                                <div className="movie_map" key={actor._id}>
                                    <img src={`data:image/jpg;base64,${actor.image}`} alt="Actor Image" />
                                    <div className="movie_info">
                                        <h2>{actor.first_name} {actor.last_name}</h2>
                                        <h5>{actor.biography}</h5>
                                        <h5>{actor.birthCity}</h5>
                                        <h5>{actor.birthDate}</h5>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div>No actors found.</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}


export default AdminPanel;