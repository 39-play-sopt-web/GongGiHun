import { useEffect, useState, useRef } from "react";
import { getMovies } from "../../apis/movie";
import type { Movie } from "../../types/movie";
import MovieCard from "../../components/MovieCard/MovieCard";
import { RATING_FILTERS } from "../../constants/filter";
import * as S from "./DiscoverPage.styles";
import { useSearchParams } from "react-router";
import ScrollToTopButton from "../../components/ScrollToTop/ScrollToTopButton";

interface ListCache {
  filterValue: string;
  page: number;
  movies: Movie[];
  hasMore: boolean;
}

// 컴포넌트 바깥 변수는 언마운트 되어도 사라지지 않음
// -> 상세 페이지 다녀와도 유지
let listCache: ListCache | null = null;

const DiscoverPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter =
    RATING_FILTERS.find((f) => f.value === searchParams.get("rating")) ??
    RATING_FILTERS[0];

  // 지금 필터와 같은 캐시가 있다면 그걸로 시작
  const cached = listCache?.filterValue === filter.value ? listCache : null;

  const [movies, setMovies] = useState<Movie[]>(cached?.movies ?? []);
  const [isLoading, setIsLoading] = useState(!cached);
  const [isError, setIsError] = useState(false);

  const [page, setPage] = useState(cached?.page ?? 1);
  const [hasMore, setHasMore] = useState(cached?.hasMore ?? true);
  const sentinelRef = useRef<HTMLDivElement>(null);

  // 필터나 페이지가 바뀌면 해당 페이지를 불러와서 기존 리스트 뒤에 이어붙인다
  useEffect(() => {
    // 이미 캐시에 있으면? 페이지 요청 ㄴㄴ
    if (listCache?.filterValue === filter.value && listCache.page >= page)
      return;

    let ignore = false;
    const { gte, lte } = filter;

    getMovies({ page, gte, lte })
      .then((data) => {
        if (ignore) return;

        // 캐시 기준으로 이어 붙이기, state는 그 결과를 그대로 반영
        const prevMovies =
          listCache?.filterValue === filter.value ? listCache.movies : [];
        const nextMovies = [...prevMovies, ...data.results];
        const nextHasMore = data.page < data.total_pages;

        listCache = {
          filterValue: filter.value,
          page,
          movies: nextMovies,
          hasMore: nextHasMore,
        };

        setMovies(nextMovies);
        setHasMore(nextHasMore);
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
  }, [filter, page]);

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

  const handleFilterClick = (value: string) => {
    if (value === filter.value) return;
    setSearchParams(value === "all" ? {} : { rating: value }, {
      replace: true,
    });

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
        {RATING_FILTERS.map((f) => (
          <S.FilterChip
            key={f.label}
            isActive={f.value === filter.value}
            onClick={() => handleFilterClick(f.value)}
          >
            {f.label}
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
      <ScrollToTopButton />
    </section>
  );
};

export default DiscoverPage;
