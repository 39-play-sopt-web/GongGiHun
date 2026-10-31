import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { IoArrowBack } from "react-icons/io5";
import { getMovieDetail } from "../../apis/movie";
import type { MovieDetail } from "../../types/movie";
import { getImageURL } from "../../utils/image";
import { formatDate, formatRuntime } from "../../utils/date";
import * as S from "./MovieDetailPage.styles";
import {
  formatCountry,
  formatLanguage,
  formatMoney,
  formatStatus,
} from "../../utils/format";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let ignore = false;

    // URL 파라미터는 항상 string -> number 변환해서 요청하기.
    getMovieDetail(Number(movieId))
      .then((data) => {
        if (!ignore) setMovie(data);
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
  }, [movieId]);

  // 목록에서 들어왔으면 뒤로가기, 상세 URL로 직접 접근 했다면 바로 홈으로
  const handleBack = () => {
    if (location.key !== "default") navigate(-1);
    else navigate("/");
  };

  if (isLoading) return <S.Message>불러오는 중...</S.Message>;
  if (isError || !movie)
    return <S.Message>영화 정보를 불러오지 못했어요. </S.Message>;

  const backdropURL = getImageURL(movie.backdrop_path, "original");
  const posterURL = getImageURL(movie.poster_path, "w200");

  //한국 영화 시 원제 생략

  const originalTitle =
    movie.original_title !== movie.title ? movie.original_title : null;
  const subTitle = [originalTitle, movie.tagline].filter(Boolean).join(" · ");

  return (
    <S.Container>
      <S.BackButton type="button" onClick={handleBack}>
        <IoArrowBack aria-hidden />
        목록으로
      </S.BackButton>

      <S.Header>
        <S.Title>{movie.title}</S.Title>
        {movie.tagline && <S.Subtitle>{movie.tagline}</S.Subtitle>}
      </S.Header>

      <S.Body>
        {backdropURL ? (
          <S.Backdrop src={backdropURL} alt="" />
        ) : (
          <S.NoImage>이미지 없음</S.NoImage>
        )}
        <S.InfoCard>
          <S.CardTop>
            {posterURL && (
              <S.Poster src={posterURL} alt={`${movie.title} 포스터`} />
            )}

            <S.RatingBlock>
              <S.RatingRow>
                <S.RatingScore>
                  <S.StarIcon aria-hidden />
                  {movie.vote_average.toFixed(1)}
                </S.RatingScore>
                <S.StatusBadge>{formatStatus(movie.status)}</S.StatusBadge>
              </S.RatingRow>
              <S.RatingCount>
                {movie.vote_count.toLocaleString()}명 평가
              </S.RatingCount>
            </S.RatingBlock>
          </S.CardTop>

          <S.Divider />

          <S.InfoGrid>
            <S.InfoItem>
              <S.Label>개봉일</S.Label>
              <S.Value>{formatDate(movie.release_date)}</S.Value>
            </S.InfoItem>
            <S.InfoItem>
              <S.Label>상영시간</S.Label>
              <S.Value>
                {movie.runtime ? formatRuntime(movie.runtime) : "정보 없음"}
              </S.Value>
            </S.InfoItem>

            <S.InfoItemWide>
              <S.GenreList>
                {movie.genres.map((genre) => (
                  <S.GenreChip key={genre.id}>{genre.name}</S.GenreChip>
                ))}
              </S.GenreList>
            </S.InfoItemWide>
          </S.InfoGrid>
        </S.InfoCard>{" "}
      </S.Body>

      <S.Section>
        <S.SectionTitle>줄거리</S.SectionTitle>
        <S.Overview>{movie.overview || "중거리 정보가 없습니다."}</S.Overview>
      </S.Section>

      <S.Section>
        <S.SectionTitle>기본 정보</S.SectionTitle>
        <S.InfoCard>
          <S.InfoGridWide>
            <S.InfoItem>
              <S.Label>원제</S.Label>
              <S.Value>{movie.original_title}</S.Value>
            </S.InfoItem>
            <S.InfoItem>
              <S.Label>원어</S.Label>
              <S.Value>{formatLanguage(movie.original_language)}</S.Value>
            </S.InfoItem>
            <S.InfoItem>
              <S.Label>제작 국가</S.Label>
              <S.Value>
                {movie.production_countries
                  .map((c) => formatCountry(c.iso_3166_1))
                  .join(", ") || "정보 없음"}
              </S.Value>
            </S.InfoItem>
            <S.InfoItem>
              <S.Label>사용 언어</S.Label>
              <S.Value>
                {movie.spoken_languages
                  .map((l) => formatLanguage(l.iso_639_1))
                  .join(", ") || "정보 없음"}
              </S.Value>
            </S.InfoItem>
            <S.InfoItem>
              <S.Label>예산</S.Label>
              <S.Value>{formatMoney(movie.budget)}</S.Value>
            </S.InfoItem>
            <S.InfoItem>
              <S.Label>수익</S.Label>
              <S.Value>{formatMoney(movie.revenue)}</S.Value>
            </S.InfoItem>
          </S.InfoGridWide>
        </S.InfoCard>
      </S.Section>
    </S.Container>
  );
};

export default MovieDetailPage;
