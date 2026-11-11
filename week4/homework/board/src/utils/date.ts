// 2026-11-04T16:11:22.010101 => 2026. 11. 4.
export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('ko-kr')
}
