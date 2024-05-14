import "./MovieMain.css";
import oscarImg from "../../../images/movieInfo/oscar.png";
import {Button} from "@mui/material";
import {grey, yellow} from "@mui/material/colors";

const MovieMain = ({id, title, description, oscar}) => {

    const actors = [
        {
            id: 1,
            firstName: "Tom",
            lastName: "Hanks"
        },
        {
            id: 2,
            firstName: "Meryl",
            lastName: "Streep"
        },
        {
            id: 3,
            firstName: "Leonardo",
            lastName: "DiCaprio"
        },
        {
            id: 4,
            firstName: "Scarlett",
            lastName: "Johansson"
        },
        {
            id: 5,
            firstName: "Morgan",
            lastName: "Freeman"
        },
        {
            id: 6,
            firstName: "Denzel",
            lastName: "Washington"
        },
        {
            id: 7,
            firstName: "Angelina",
            lastName: "Jolie"
        },
        {
            id: 8,
            firstName: "Brad",
            lastName: "Pitt"
        },
        {
            id: 9,
            firstName: "Jennifer",
            lastName: "Lawrence"
        },
        {
            id: 10,
            firstName: "Robert",
            lastName: "Downey Jr."
        },
        {
            id: 11,
            firstName: "Julia",
            lastName: "Roberts"
        },
        {
            id: 12,
            firstName: "Will",
            lastName: "Smith"
        },
        {
            id: 13,
            firstName: "Cate",
            lastName: "Blanchett"
        },
        {
            id: 14,
            firstName: "Christian",
            lastName: "Bale"
        },
        {
            id: 15,
            firstName: "Emma",
            lastName: "Stone"
        },
        {
            id: 16,
            firstName: "Ryan",
            lastName: "Gosling"
        },
        {
            id: 17,
            firstName: "Kate",
            lastName: "Winslet"
        },
        {
            id: 18,
            firstName: "Daniel",
            lastName: "Day-Lewis"
        },
        {
            id: 19,
            firstName: "Natalie",
            lastName: "Portman"
        },
        {
            id: 20,
            firstName: "Johnny",
            lastName: "Depp"
        }
    ];


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
                {actors.map(actor => (
                    <span key={actor.id}>
                        <a href="">{actor.firstName} {actor.lastName},</a>{" "}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default MovieMain;