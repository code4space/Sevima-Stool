import { createBrowserRouter } from "react-router-dom";
import HomePage from "../views/home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    }
])

export default router