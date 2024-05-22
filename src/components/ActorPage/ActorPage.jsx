import "./ActorPage.css"
import johnyDeppImg from "../../images/actors/Johny Depp.png";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {Button} from "@mui/material";
import {grey} from "@mui/material/colors";
import {Outlet, useParams} from "react-router-dom";
import async from "async";
import {useEffect, useState} from "react";

const ActorPage = () => {

    const {actorId} = useParams();

    const [actor, setActor] = useState({})
    useEffect(() => {
        const getActor = async (actorId) => {
            const response = await fetch(`http://localhost:5001/api/actors/${actorId}`, {
                method: "GET"
            });
            const data = await response.json();
            setActor(data);
        }
        console.log(actorId);
        getActor(actorId);
    }, [actorId]);


    return (
        <>
            <div className="movie_header">
                <Button sx={{
                    backgroundColor: grey[700], color: grey[100], width: 50, height: 60, borderRadius: 4, '&:hover': {
                        backgroundColor: grey[600],
                    },
                }}>
                    <ArrowBackIosNewIcon sx={{height: 25}}/>
                </Button>
                На домашню
            </div>
            <div className="actor_wrapper">
                <div className="actor_page_container">
                    <img src={`data:image/jpg;base64,${actor.image}`} alt="Actor Image"/>
                    <div className="actor_info">
                        <h2>{actor.first_name} {actor.last_name}</h2>
                        <br/>
                        <h5>Дата народження: {actor.birthDate}</h5>
                        <h5>Місце народження: {actor.birthCity}</h5>
                        <h5>Біографія:</h5>
                        <h5>{actor.biography}</h5>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ActorPage;