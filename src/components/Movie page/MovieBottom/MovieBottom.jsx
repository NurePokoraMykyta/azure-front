import "./MovieBottom.css"

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import {Button, createTheme, ThemeProvider} from "@mui/material";
import {grey} from "@mui/material/colors";
import React from "react";

const MovieBottom = ({prev, next}) => {
    return (
            <div className="movie_bottom">
                <Button
                    onClick={prev}
                    sx={{
                        width: 313,
                        height: 57,
                        borderRadius: 5,
                        backgroundColor: grey[800],
                        color: grey[100],
                        '&:hover': {
                            backgroundColor: grey[600],
                        },
                    }}
                >
                    <ArrowBackIosNewIcon/>
                </Button>
                <Button
                    onClick={next}
                    sx={{
                        width: 313,
                        height: 57,
                        borderRadius: 5,
                        backgroundColor: grey[800],
                        color: grey[100],
                        '&:hover': {
                            backgroundColor: grey[600],
                        },
                    }}
                >
                    <ArrowForwardIosIcon/>
                </Button>
            </div>
    );
}
export default MovieBottom;