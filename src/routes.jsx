import { Navigate, createBrowserRouter } from "react-router-dom";
import MovieListPage from "./pages/MovieListPage";
import MovieDetailPage from "./pages/MovieDetailPage";

const router = createBrowserRouter([
  { index: true, element: <Navigate to="/movies" /> },
  { path: "/movies", element: <MovieListPage /> },
  { path: "/movies/:id", element: <MovieDetailPage /> },
]);

export default router;
