import './App.css';
import MainPage from "./components/MainPage/MainPage";
import Header from "./components/MainPage/Header/Header";
import Movie_header from "./components/Movie page/MovieHeader/Movie_header";
import Movie_page from "./components/Movie page/Movie_page";
import MovieList from "./components/MovieList/MovieList";
import ActorPage from "./components/ActorPage/ActorPage";
import FavoritesList from "./components/FavoritesList/FavoritesList";
import {Outlet, createBrowserRouter, RouterProvider} from "react-router-dom";
import * as React from "react";
import * as ReactDOM from "react-dom";
import AdminPanel from "./components/AdminPanel/AdminPanel";

const router = createBrowserRouter([
        {
            path: "/",
            element: <MainPage/>,
        },
        {
            path: "movie-list",
            element: <MovieList/>,
        },
        {
            path: "movie-list/:movieId",
            element: <Movie_page/>
        },

        {
            path: "actors/:actorId",
            element:
                <ActorPage/>,
        }
        ,
        {
            path: "user/favorites/:userId",
            element:
                <FavoritesList/>
        },
        {
            path: "admin",
            element:
                <AdminPanel/>
        }
    ])
;

function App() {
    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;