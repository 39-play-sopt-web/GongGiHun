export interface RatingFilter {
  label: string;
  gte?: number;
  lte?: number;
}

export const RATING_FILTERS: RatingFilter[] = [
  { label: "전체" },
  { label: "9점 이상", gte: 9 },
  { label: "8 ~ 9점", gte: 8, lte: 9 },
  { label: "7 ~ 8점", gte: 7, lte: 8 },
  { label: "6 ~ 7점", gte: 6, lte: 7 },
  { label: "6점 이하", lte: 6 },
];
