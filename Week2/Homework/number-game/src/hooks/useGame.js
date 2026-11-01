import { useEffect, useState } from "react";
import { shuffle, range } from "../utils/shuffle";
import { saveRecord } from "../utils/storage";
import { LEVELS } from "../constants/level";

const createGame = (size) => {
  const cellcount = size * size;
  const total = cellcount * 2;

  return {
    cells: shuffle(range(1, cellcount)),
    reserve: shuffle(range(cellcount + 1, total)),
    next: 1,
  };
};

function useGame() {
  const [level, setLevel] = useState(1);

  // size, total 훅 안으로 이동
  const size = LEVELS[level].size;
  const total = size * size * 2;

  const [game, setGame] = useState(() => createGame(size));
  const [startTime, setStartTime] = useState(null);
  const [elapsed, setElapsed] = useState(0);
  const [wrongIndex, setWrongIndex] = useState(null);
  const [result, setResult] = useState(null); // 모달 오픈 결과 상태 추가

  useEffect(() => {
    if (startTime === null) return;
    const id = setInterval(() => setElapsed(Date.now() - startTime), 10);
    return () => clearInterval(id);
  }, [startTime]);

  const reset = () => {
    setGame(createGame(size));
    setStartTime(null);
    setElapsed(0);
  };

  const finish = () => {
    const playTime = Date.now() - startTime;
    setStartTime(null); // 타이머 정지
    setElapsed(playTime);
    saveRecord({ playedAt: Date.now(), level, playTime });
    // 모달 열기
    setResult({ level, playTime });
  };

  const closeResult = () => {
    setResult(null);
    reset();
  };
  const changeLevel = (nextLevel) => {
    setLevel(nextLevel);
    setGame(createGame(LEVELS[nextLevel].size)); // 새 레벨 크기로 바로 생성
    setStartTime(null);
    setElapsed(0);
  };

  const handleCellClick = (index) => {
    if (game.cells[index] !== game.next) {
      setWrongIndex(index);
      return;
    } // 무시 -> 틀리면 cell 흔들리게
    if (game.next === 1) setStartTime(Date.now()); // 1을 누르면 타이머 시작
    if (game.next === total) {
      // 마지막 숫자도 칸을 비우고 종료
      setGame({
        ...game,
        cells: game.cells.map((n, i) => (i === index ? null : n)),
      });
      return finish();
    }

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
    total,
    elapsed,
    level,
    changeLevel,
    size,
    handleCellClick,
    reset,
    wrongIndex,
    clearWrong: () => setWrongIndex(null),
    result,
    closeResult,
  };
}

export default useGame;
