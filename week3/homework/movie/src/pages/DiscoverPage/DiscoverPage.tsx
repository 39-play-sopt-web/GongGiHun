import { useEffect, useState, useRef } from "react";
import { getMovies } from "../../apis/movie";
import type { Movie } from "../../types/movie";
import MovieCard from "../../components/MovieCard/MovieCard";
import { RATING_FILTERS } from "../../constants/filter";
import * as S from "./DiscoverPage.styles";

const DiscoverPage = () => {
  const [filterIndex, setFilterIndex] = useState(0);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const sentinelRef = useRef<HTMLDivElement>(null);

  // 필터나 페이지가 바뀌면 해당 페이지를 불러와서 기존 리스트 뒤에 이어붙인다
  useEffect(() => {
    let ignore = false;
    const { gte, lte } = RATING_FILTERS[filterIndex];

    getMovies({ page, gte, lte })
      .then((data) => {
        if (ignore) return;
        setMovies((prev) => [...prev, ...data.results]);
        setHasMore(data.page < data.total_pages);
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
  }, [filterIndex, page]);

  // sentinel이 화면에 들어오면 다음 페이지 요청
  // 로딩이 끝날 때마다 다시 연결 → 화면이 덜 찼으면 자동으로 이어서 불러옴
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || isLoading || !hasMore) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoading(true); // 같은 페이지 중복요청 방지
          setPage((prev) => prev + 1);
        }
      },
      { rootMargin: "250px" }, // 바닥 250px 전에 미리 부르기
    );
    observer.observe(sentinel);

    return () => observer.disconnect();
  }, [isLoading, hasMore]);

  const handleFilterClick = (index: number) => {
    if (index === filterIndex) return;
    setFilterIndex(index);

    setPage(1);
    setHasMore(true);

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
      {!isError && hasMore && <S.Sentinel ref={sentinelRef} />}

      {!isLoading && !isError && movies.length === 0 && (
        <S.Message>해당 평점의 영화가 없습니다. </S.Message>
      )}
    </section>
  );
};

export default DiscoverPage;
