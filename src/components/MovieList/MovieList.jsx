import "./MovieList.css"
import Header from "../MainPage/Header/Header";
import Footer from "../MainPage/Footer/Footer";
import {Button, Menu} from "@mui/material";
import {useEffect, useState} from "react";

import StarIcon from '@mui/icons-material/Star';
import {Outlet} from "react-router-dom";
import {grey} from "@mui/material/colors";

const MovieList = () => {
    return (
        <div className="movie_list">
            <Header/>
            <MainPart/>
            <Footer/>
        </div>
    );
}


const MainPart = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };



    const [moviesList, setMoviesList] = useState([])

    useEffect(() => {
        const getAllMovies = async () => {
            const response = await fetch(`http://localhost:5050/api/movies`, {
                method: "GET"
            });
            const data = await response.json();
            setMoviesList(data)
        }
        getAllMovies()
    }, []);

    const getRemoteMovies = [
        {
            id: 1,
            title: "Фільм 1",
            description: "Опис фільму 1",
            img: "https://static.nv.ua/shared/system/Article/posters/002/716/029/original/85b45600bc077f2aed9b5677d8dd5023.jpg?q=85&stamp=20230718195928&w=600",
            releaseDate: "07.05.2024",
            rating: 8
        },
        {
            id: 2,
            title: "Фільм 2",
            description: "Опис фільму 2",
            img: "https://static.nv.ua/shared/system/Article/posters/002/716/029/original/85b45600bc077f2aed9b5677d8dd5023.jpg?q=85&stamp=20230718195928&w=600",
            releaseDate: "07.05.2024",
            rating: 7
        },
        {
            id: 3,
            title: "Фільм 3",
            description: "Опис фільму 3",
            img: "https://static.nv.ua/shared/system/Article/posters/002/716/029/original/85b45600bc077f2aed9b5677d8dd5023.jpg?q=85&stamp=20230718195928&w=600",
            releaseDate: "07.05.2024",
            rating: 9
        },
        {
            id: 4,
            title: "Фільм 4",
            description: "Опис фільму 4",
            img: "https://static.nv.ua/shared/system/Article/posters/002/716/029/original/85b45600bc077f2aed9b5677d8dd5023.jpg?q=85&stamp=20230718195928&w=600",
            releaseDate: "07.05.2024",
            rating: 6
        },
        {
            id: 5,
            title: "Фільм 5",
            description: "Опис фільму 5",
            img: "https://static.nv.ua/shared/system/Article/posters/002/716/029/original/85b45600bc077f2aed9b5677d8dd5023.jpg?q=85&stamp=20230718195928&w=600",
            releaseDate: "07.05.2024",
            rating: 8
        },
        {
            id: 6,
            title: "Фільм 6",
            description: "Опис фільму 6",
            img: "https://static.nv.ua/shared/system/Article/posters/002/716/029/original/85b45600bc077f2aed9b5677d8dd5023.jpg?q=85&stamp=20230718195928&w=600",
            releaseDate: "07.05.2024",
            rating: 9
        },
        {
            id: 7,
            title: "Фільм 7",
            description: "Опис фільму 7",
            img: "https://static.nv.ua/shared/system/Article/posters/002/716/029/original/85b45600bc077f2aed9b5677d8dd5023.jpg?q=85&stamp=20230718195928&w=600",
            releaseDate: "07.05.2024",
            rating: 7
        },
        {
            id: 8,
            title: "Фільм 8",
            description: "Опис фільму 8",
            img: "https://static.nv.ua/shared/system/Article/posters/002/716/029/original/85b45600bc077f2aed9b5677d8dd5023.jpg?q=85&stamp=20230718195928&w=600",
            releaseDate: "07.05.2024",
            rating: 8
        },
        {
            id: 9,
            title: "Фільм 9",
            description: "Опис фільму 9",
            img: "https://static.nv.ua/shared/system/Article/posters/002/716/029/original/85b45600bc077f2aed9b5677d8dd5023.jpg?q=85&stamp=20230718195928&w=600",
            releaseDate: "07.05.2024",
            rating: 6
        },
        {
            id: 10,
            title: "Фільм 10",
            description: "Опис фільму 10",
            img: "https://static.nv.ua/shared/system/Article/posters/002/716/029/original/85b45600bc077f2aed9b5677d8dd5023.jpg?q=85&stamp=20230718195928&w=600",
            releaseDate: "07.05.2024",
            rating: 7
        }
    ]

    const [movies, setMovies] = useState(getRemoteMovies);

    const usersFavorites = [
        {movieId: 1},
        {movieId: 2},
        {movieId: 15},
        {movieId: 4},
        {movieId: 18},
        {movieId: 6},
        {movieId: 7},
        {movieId: 19},
        {movieId: 9},
        {movieId: 10}
    ];


    const [favorites, setFavorites] = useState(false);

    const getFavorites = () => {
        if (favorites) {
            const favoriteMovies = movies.filter(movie =>
                usersFavorites.some(userFavorite => userFavorite.movieId == movie.id)
            )
            setMovies(favoriteMovies)
        } else {
            setMovies(getRemoteMovies);
        }
    }
    const addInFavorites = (id) => {
        usersFavorites.push({movieId: id});
    }


    return (
        <>
            <div className="movie_list_header">
                <div className="movie_list_input"><input type="text"/></div>
                <div className="movie_list_title">Список фільмів</div>
                <div className="movie_list_filter">
                    <Button
                        id="actors-button"
                        variant="contained"
                        aria-controls={open ? "actors-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                    >
                        Фільтрувати акторів
                    </Button>
                    <Menu
                        id="actors-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            "aria-labelledby": "actors-button",
                        }}
                    />
                    <Button
                        id="actors-button"
                        variant="contained"
                        aria-controls={open ? "actors-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={() => {
                            setFavorites(fav => !fav);
                            getFavorites()
                        }}>
                        Вивести обране
                    </Button>
                </div>
            </div>
            <div className="movie_list_container">
                <div className="movie_list_main">
                    {moviesList.map(moviesList => (
                        <div key={moviesList._id} className="movie_list_item">
                            <img src={`data:image/png;base64, ${moviesList.image}`} alt="Dynamic Image" />
                            <div className="movie_list_item_info">
                                <div className="top_block">
                                    <header>{moviesList.title}</header>
                                    <h3>{moviesList.description}</h3>
                                </div>
                                <div className="movie_date_rate">
                                    <div className="movie_date">{moviesList.releaseDate}</div>
                                    {usersFavorites.map(favorite => favorite.movieId).includes(moviesList.id) ? (
                                        <Button onClick={() => addInFavorites(moviesList._id)} style={{color: 'yellow'}}>
                                            <StarIcon/>
                                        </Button>
                                    ) : (
                                        <Button onClick={() => addInFavorites(moviesList._id)} style={{color: 'blue'}}>
                                            <StarIcon/>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Outlet/>
        </>
    )
}


export default MovieList;