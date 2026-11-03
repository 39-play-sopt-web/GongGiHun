import axios from "axios";

// TMDB 요청 전용 axios 인스턴스: 공통 설정을 한 곳에
// 사용 예시 : instance.get('/movie/popular', { params: { page: 1 } })
export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  // 모든 요청에 자동으로 붙는 쿼리스트링 (?api_key=...&language=ko-KR)
  // 요청할 때 넘긴 params와 합쳐짐
  params: {
    api_key: import.meta.env.VITE_API_KEY,
    language: "ko-KR", 
  },
});
