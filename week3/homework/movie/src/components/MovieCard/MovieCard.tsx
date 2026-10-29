import type { Movie } from "../../types/movie";
import { getImageURL } from "../../utils/image";
import * as S from './MovieCard.styles'

interface MovieCardProps {
    movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
    const posterURL = getImageURL(movie.poster_path);

    return (
        <S.Card to = {`/movie/${movie.id}`}>
            {posterURL ? (
                <S.Poster src = {posterURL} alt={movie.title} loading="lazy" />
            ): ( <S.NoPoster>이미지 없음</S.NoPoster>
            )}
            <S.Info>
                <S.Title>{movie.title}</S.Title>
                <S.Meta>
                    <span>{movie.release_date.slice(0, 4)}</span>
                <S.Rating>* {movie.vote_average.toFixed(1)}</S.Rating>
                </S.Meta>
            </S.Info>
        </S.Card>
    )
}

export default MovieCard;