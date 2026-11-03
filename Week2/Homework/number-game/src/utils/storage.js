const RANKING_KEY = "ranking";

export function getRecords() {
  try {
    return JSON.parse(localStorage.getItem(RANKING_KEY)) ?? [];
  } catch {
    return [];
  }
}

// 기존 기록 읽은 후 추가
export function saveRecord(record) {
  try {
    localStorage.setItem(
      RANKING_KEY,
      JSON.stringify([...getRecords(), record]),
    );
  } catch (error) {
    console.error("기록 저장 실패", error);
  }
}

export function clearRecords() {
  localStorage.removeItem(RANKING_KEY);
}
