import type { Movie } from "../../types/movie";
import { getImageURL } from "../../utils/image";
import * as S from "./MovieCard.styles";
import { formatDate } from "../../utils/date";
import { FaStar } from "react-icons/fa";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const posterURL = getImageURL(movie.poster_path);

  return (
    <S.Card to={`/movie/${movie.id}`}>
      <S.RatingBadge>
        <S.StarIcon aria-hidden />
        {movie.vote_average.toFixed(1)}
      </S.RatingBadge>
      {posterURL ? (
        <S.Poster src={posterURL} alt={movie.title} loading="lazy" />
      ) : (
        <S.NoPoster>이미지 없음</S.NoPoster>
      )}
      <S.Info>
        <S.Title>{movie.title}</S.Title>
        <S.ReleaseDate>{formatDate(movie.release_date)}</S.ReleaseDate>
        <S.Overview>{movie.overview || "줄거리 정보가 없습니다."}</S.Overview>
      </S.Info>
    </S.Card>
  );
};

export default MovieCard;
