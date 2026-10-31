// .env에 있는 환경변수의 타입 선언 (import/export가 없어야 전역 선언으로 동작)
// VITE_ 접두사가 붙은 변수만 브라우저 코드에 노출
interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string; // TMDB API 주소
  readonly VITE_API_KEY: string; // TMDB v3 API 키
}

// import.meta.env가 위 타입을 갖도록 연결
interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/// <reference types="vite-plugin-svgr/client" />
