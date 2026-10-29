import { useEffect, useState } from "react";
import { getMovies } from "../../apis/movie";
import type { Movie } from "../../types/movie";
import MovieCard from "../../components/MovieCard/MovieCard";
import { RATING_FILTERS } from "../../constants/filter";
import * as S from "./DiscoverPage.styles";
import { IoStar } from "react-icons/io5";

const DiscoverPage = () => {
  const [filterIndex, setFilterIndex] = useState(0);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let ignore = false;
    const { gte, lte } = RATING_FILTERS[filterIndex];

    getMovies({ gte, lte })
      .then((data) => {
        if (!ignore) setMovies(data.results);
      })
      .catch(() => {
        if (!ignore) setIsError(true);
      })
      .finally(() => {
        if (!ignore) setIsLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [filterIndex]);

  const handleFilterClick = (index: number) => {
    if (index === filterIndex) return;
    setFilterIndex(index);
    setMovies([]);
    setIsLoading(true);
    setIsError(false);
  };

  return (
    <section>
      <S.Title>영화 둘러보기</S.Title>

      <S.FilterList>
        {RATING_FILTERS.map((filter, index) => (
          <S.FilterChip
            key={filter.label}
            isActive={index === filterIndex}
            onClick={() => handleFilterClick(index)}
          >
            {filter.label}
          </S.FilterChip>
        ))}
      </S.FilterList>

      {isError ? (
        <S.Message>영화를 불러오지 못했어요.</S.Message>
      ) : (
        <S.Grid>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </S.Grid>
      )}

      {isLoading && <S.Message>불러오는 중...</S.Message>}
    </section>
  );
};

export default DiscoverPage;
