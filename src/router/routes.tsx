import {createBrowserRouter} from "react-router";
import MoviesPage from "../pages/MoviesPage.tsx";
import MoviesDetailsPage from "../pages/MoviesDetailsPage.tsx";

export const routes = createBrowserRouter([
    {path: '/', element: <MoviesPage/>},
    {path: 'movies/:id', element: <MoviesDetailsPage/>}
]);
