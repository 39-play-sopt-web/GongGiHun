import { useEffect, useState } from "react";
import { shuffle, range } from "../utils/shuffle";
import { saveRecord } from "../utils/storage";

const SIZE = 3;
const CELL_COUNT = SIZE * SIZE;
const TOTAL = CELL_COUNT * 2;

const createGame = () => ({
  cells: shuffle(range(1, CELL_COUNT)),
  reserve: shuffle(range(CELL_COUNT + 1, TOTAL)),
  next: 1,
});

function useGame(level) {
  const [game, setGame] = useState(createGame);
  const [startTime, setStartTime] = useState(null);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (startTime === null) return;
    const id = setInterval(() => setElapsed(Date.now() - startTime), 10);
    return () => clearInterval(id);
  }, [startTime]);

  const reset = () => {
    setGame(createGame());
    setStartTime(null);
    setElapsed(0);
  };

  const finish = () => {
    const playTime = Date.now() - startTime;
    setStartTime(null); // 타이머 정지
    setElapsed(playTime);
    setTimeout(() => {
      // 화면 갱신 후 alert
      alert(`${(playTime / 1000).toFixed(2)}초`);
      saveRecord({ playedAt: Date.now(), level, playTime });
      reset();
    }, 0);
  };

  const handleCellClick = (index) => {
    if (game.cells[index] !== game.next) return; // 틀린 숫자는 무시
    if (game.next === 1) setStartTime(Date.now()); // 1을 누르면 타이머 시작
    if (game.next === TOTAL) return finish(); // 마지막 숫자면 종료

    setGame({
      cells: game.cells.map((n, i) =>
        i === index ? (game.reserve[0] ?? null) : n,
      ), // 10~18 소진 시 빈칸
      reserve: game.reserve.slice(1),
      next: game.next + 1,
    });
  };

  return {
    cells: game.cells,
    next: game.next,
    total: TOTAL,
    elapsed,
    handleCellClick,
    reset,
  };
}

export default useGame;
