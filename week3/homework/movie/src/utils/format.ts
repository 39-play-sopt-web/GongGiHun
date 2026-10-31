// en -> 영어 등 브라우저 내장 번역 사용

const languageNames = new Intl.DisplayNames(["ko"], { type: "language" });
const regionNames = new Intl.DisplayNames(["ko"], { type: "region" });

export const formatLanguage = (code: string) => {
  try {
    return languageNames.of(code) ?? code;
  } catch {
    return code; // 형식 잘못된 코드면 그대로 표시.
  }
};

export const formatCountry = (Code: string) => {
  try {
    return regionNames.of(Code) ?? Code;
  } catch {
    return Code;
  }
};

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  notation: "compact",
  maximumFractionDigits: 1,
});

export const formatMoney = (amount: number) =>
  amount > 0 ? currency.format(amount) : "정보 없음";

// TMDB status는 영어로 전달
const STATUS_LABEL: Record<string, string> = {
  Rumored: "루머",
  Planned: "제작 에정",
  "In Production": "제작 중",
  "Post Production": "후반 작업 중",
  Released: "개봉",
  Canceled: "제작 취소",
};

export const formatStatus = (status: string) => STATUS_LABEL[status] ?? status;
