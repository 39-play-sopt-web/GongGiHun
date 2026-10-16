// Fisher–Yates: 뒤에서부터 돌며 [0, i] 범위의 랜덤 위치와 교환
export function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// start부터 end까지(end 포함) 정수 배열
export function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}
