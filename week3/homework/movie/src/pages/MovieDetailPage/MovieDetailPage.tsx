//잠시 확인용

import { useParams } from 'react-router';

const MovieDetailPage = () => {
  const { movieId } = useParams();
  return <h2>Detail: {movieId}</h2>;
};

export default MovieDetailPage;
