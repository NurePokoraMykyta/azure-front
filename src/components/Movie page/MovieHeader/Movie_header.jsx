import "./Movie_header.css"

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {Button} from "@mui/material";
import {grey} from "@mui/material/colors";

const Movie_header = () => {
    return (
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
    );

}

export default Movie_header
