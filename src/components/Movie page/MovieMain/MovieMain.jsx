import "./MovieMain.css";
import oscarImg from "../../../images/movieInfo/oscar.png";
import {Button} from "@mui/material";
import {grey, yellow} from "@mui/material/colors";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import { Link } from 'react-router-dom';

const MovieMain = ({id, title, description, oscar, movie}) => {

    const [actors, setActors] = useState([]);
    useEffect(() => {
        const getAllActors = async (movieId) => {
            const response = await fetch(`http://localhost:5001/api/actors/movie/${movie}`, {
                method: "GET"
            });
            const data = await response.json();
            setActors(data)
        }
        console.log(movie);
        getAllActors(movie)
    }, [movie]);

    const [transitActor, setTransitActor] = useState()

    return (
        <div className="movie_main">
            <div className="movie_info">
                <div className="left_block">
                    <div className="first_row">
                        <div className="movie_info">
                            <header>{title}</header>
                            <br/>
                            <h3>{description}</h3>
                        </div>
                    </div>
                    <div className="second_row">
                        <Button sx={{
                            backgroundColor: grey[300],
                            width: 389,
                            height: 113,
                            borderRadius: 5,
                            color: grey[900],
                            fontSize: 25,
                            '&:hover': {
                                backgroundColor: grey[600],
                            },
                        }}>Рецензії</Button>
                        <Button sx={{
                            backgroundColor: grey[300],
                            width: 389,
                            height: 113,
                            borderRadius: 5,
                            color: grey[900],
                            fontSize: 25,
                            '&:hover': {
                                backgroundColor: grey[600],
                            },
                        }}>Актори</Button>
                        <Button sx={{
                            backgroundColor: yellow[800],
                            width: 389,
                            height: 113,
                            borderRadius: 5,
                            color: grey[900],
                            fontSize: 25,
                            '&:hover': {
                                backgroundColor: yellow[900],
                            },
                        }}>Додати в обране</Button>
                    </div>
                </div>
                <div className="right_block">
                    {oscar ? (
                        <img src={oscarImg} alt=""/>
                    ) : null}
                </div>
            </div>
            <div className="actor_list">
                <h2>Актори</h2>
                <br/>
                {Array.isArray(actors) && actors.map((actor, index) => (
                    <span key={actor._id}>
        <Link className="redirect_to_actor" to={`/actors/${actor._id}`}>
            {actor.fullname}
        </Link>
                        {index < actors.length - 1 && ', '}
    </span>
                ))}
            </div>

        </div>
    );
}

export default MovieMain;