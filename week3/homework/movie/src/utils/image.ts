const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

// TMDB가 제공하는 이미지 크기 중 사용할 것만 유니온 타입으로 제한
type ImageSize = "w200" | "w500" | "original";

// TMDB는 poster_path를 "/ptq219812983891298.jpg"처럼 경로만 주기 때문에 전체 URL로 조립
export const getImageURL = (path: string | null, size: ImageSize = "w500") => {
  // 포스터가 없는 영화는 path가 null → 컴포넌트에서 대체 이미지 처리
  if (!path) return null;
  return `${IMAGE_BASE_URL}/ ${size}${path}`;
};
