// "2026-10-28" -> "2026년 10월 28일"

export const formatDate = (date: string) => {
  if (!date) return "개봉일 미정";

  return new Date(date).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// 179 -> 2시간 59분

export const formatRuntime = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return minutes >= 60 ? `${hours}시간 ${mins}분` : `${mins}분`;
};
