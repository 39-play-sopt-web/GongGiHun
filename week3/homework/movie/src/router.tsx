import {createBrowserRouter} from 'react-router';
import Layout from './components/Layout/Layout';
import DiscoverPage from './pages/DiscoverPage/DiscoverPage';
import MovieDetailPage from './pages/MovieDetailPage/MovieDetailPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index:true, element: <DiscoverPage />},
            { path: 'movie/:movieId', element: <MovieDetailPage />},
        ],
    },
]);
