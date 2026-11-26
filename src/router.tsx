import { createBrowserRouter } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import MoviePage from "./pages/MoviePage";


export const router = createBrowserRouter([
    {
        Component: MainLayout,
        children: [
            { path: '/', Component: Home },
            { path: '/about', Component: About },
            { path: '/movie/:id', Component: MoviePage },
            { path: '*', Component: NotFound },
        ]
    }
])