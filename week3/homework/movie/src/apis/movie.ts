// api 호출 함수

import { instance } from "./instance";
import type { MovieDetail, MovieListResponse } from "../types/movie";

// 영화 목록 (인기순), instance의 api_key, language와 params가 합쳐져서 요청됨
interface GetMoviesParams {
  page?: number;
  gte?: number;
  lte?: number;
}

export const getMovies = async ({
  page = 1,
  gte,
  lte,
}: GetMoviesParams = {}) => {
  const { data } = await instance.get<MovieListResponse>("/discover/movie", {
    params: {
      page,
      sort_by: "popularity.desc",
      "vote_average.gte": gte,
      "vote_average.lte": lte,
      "vote_count.gte": 10,
    },
  });
  return data;
};

// 영화 상세 정보, 에러는 여기서 잡지 않고 호출한 페이지에서 처리
export const getMovieDetail = async (movieId: number) => {
  const { data } = await instance.get<MovieDetail>(`/movie/${movieId}`);
  return data;
};
