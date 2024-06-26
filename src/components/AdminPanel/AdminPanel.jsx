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
            setMoviesList(data);
        };
        getAllMovies();
    }, [moviesList]);

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
    }, [actors]);

    const [adminPage, setAdminPage] = useState(category.Movies)
    const [newMovie, setNewMovie] = useState({
        title: '',
        description: '',
        image: null,
        releaseDate: '',
        rating: 0
    })
    const [newActor, setNewActor] = useState({
        first_name: '',
        last_name: '',
        birthDate: '',
        birthCity: '',
        image: null,
        biography: ''

    })

    const handleInputChange = (e, type) => {
        if (e.target.name === 'image') {
            if (type === 'movie') {
                setNewMovie({...newMovie, image: e.target.files[0]})
            } else {
                setNewActor({...newActor, image: e.target.files[0]})
            }
        } else {
            if (type === 'movie') {
                setNewMovie({...newMovie, [e.target.name]: e.target.value})
            } else {
                setNewActor({...newActor, [e.target.name]: e.target.value})
            }
        }
    }

    const handleAddMovie = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", newMovie.title);
        formData.append('releaseDate', newMovie.releaseDate);
        formData.append('description', newMovie.description);
        formData.append('rating', newMovie.rating);

        // Формуємо рядок з іменами та прізвищами акторів
        const actorsString = selectedActors.map(actor => `${actor.first_name} ${actor.last_name}`).join(', ');
        formData.append("actor_names", actorsString);

        formData.append('img', newMovie.image);

        try {
            const response = await fetch(`http://localhost:5000/api/admin/movies/add`, {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                const newMovieData = await response.json();
                setMoviesList((prevMoviesList) => [...prevMoviesList, newMovieData]);
                setNewMovie({
                    title: '',
                    description: '',
                    image: null,
                    releaseDate: '',
                    rating: 0
                });
                setSelectedActors([]);
            } else {
                console.error('Failed to add movie');
            }
        } catch (error) {
            console.error('Error adding movie:', error);
        }
    }
    const handleAddActor = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('first_name', newActor.first_name)
        formData.append('last_name', newActor.last_name)
        formData.append('biography', newActor.biography)
        formData.append('birthCity', newActor.birthCity)
        formData.append('birthDate', newActor.birthDate)
        formData.append('img', newActor.image)
        const response = await fetch(`http://localhost:5001/api/admin/actors/add`, {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        return data;
    }

    const [selectedActors, setSelectedActors] = useState([]);

    const handleSelectActor = (actor) => {
        setSelectedActors((prevSelectedActors) => [...prevSelectedActors, actor]);
    };

    const handleRemoveActor = (actorId) => {
        setSelectedActors((prevSelectedActors) =>
            prevSelectedActors.filter((actor) => actor._id !== actorId)
        );
    };


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
                        <h3>Оберіть акторів</h3>
                        <div>
                            {actors.map((actor) => (
                                <div key={actor._id}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={selectedActors.some((selectedActor) => selectedActor._id === actor._id)}
                                            onChange={() => handleSelectActor(actor)}
                                        />
                                        {actor.first_name} {actor.last_name}
                                    </label>
                                    <button onClick={() => handleRemoveActor(actor._id)}>Видалити</button>
                                </div>
                            ))}
                        </div>
                        <input type="file" name="image" onChange={(e) => handleInputChange(e, 'movie')}/>
                        <Button onClick={handleAddMovie}>Додати фільм</Button>
                        {moviesList.map(movie => (
                            <div className="movie_map" key={movie.id}>
                                <img src={`data:image/jpg;base64,${movie.image}`} alt="movieImage"/>
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
                            name="last_name"
                            placeholder="прізвище"
                            value={newActor.last_name}
                            onChange={(e) => handleInputChange(e, 'actor')}
                        />
                        <input
                            type="text"
                            name="first_name"
                            placeholder="Ім'я"
                            value={newActor.first_name}
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
                        <input type="file" name="image" onChange={(e) => handleInputChange(e, 'actor')}/>
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
                                    <img src={`data:image/jpg;base64,${actor.image}`} alt="Actor Image"/>
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