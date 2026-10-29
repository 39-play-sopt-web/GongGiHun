import { useEffect, useState } from 'react';
import { getMovies } from '../../apis/movie';
import type { Movie } from '../../types/movie';
import MovieCard from '../../components/MovieCard/MovieCard';

const DiscoverPage = () => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    getMovies().then((data) => setMovie(data.results[0]));
  }, []);

  return movie && <MovieCard movie={movie} />;
};

export default DiscoverPage;
