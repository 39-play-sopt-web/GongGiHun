// "2026-10-28" -> "2026년 10월 28일"

export const formatDate = (date: string) => {
  if (!date) return "개봉일 미정";

  return new Date(date).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
