export interface RatingFilter {
  value: string;
  label: string;
  gte?: number;
  lte?: number;
}

export const RATING_FILTERS: RatingFilter[] = [
  { value: "all", label: "전체" },
  { value: "9", label: "9점 이상", gte: 9 },
  { value: "8-9", label: "8 ~ 9점", gte: 8, lte: 9 },
  { value: "7-8", label: "7 ~ 8점", gte: 7, lte: 8 },
  { value: "6-7", label: "6 ~ 7점", gte: 6, lte: 7 },
  { value: "under-6", label: "6점 이하", lte: 6 },
];
