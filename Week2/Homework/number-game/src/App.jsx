import { useState, useRef } from "react";
import Header from "./components/Header/Header";
import GameBoard from "./components/GameBoard/GameBoard";
import Ranking from "./components/Ranking/Ranking";
import useGame from "./hooks/useGame";
import Modal from "./components/Modal/Modal";
import { formatTime } from "./utils/format";
import { flushSync } from "react-dom";

function App() {
  const [page, setPage] = useState("game");
  const {
    cells,
    next,
    total,
    startTime,
    endTime,
    level,
    size,
    handleCellClick,
    wrongIndex,
    clearWrong,
    result,
    closeResult,
    startNewGame,
  } = useGame();

  const handlePageChange = (nextPage) => {
    if (nextPage === page) return;
    setPage(nextPage);
    startNewGame();
  };

  const firstCellRef = useRef(null);

  const handelCloseResult = () => {
    flushSync(() => closeResult());
    firstCellRef.current?.focus();
  };

  return (
    <>
      <Header
        page={page}
        onPageChange={handlePageChange}
        level={level}
        onLevelChange={startNewGame}
        startTime={startTime}
        endTime={endTime}
      />
      {page === "game" && (
        <GameBoard
          cells={cells}
          next={next}
          total={total}
          size={size}
          wrongIndex={wrongIndex}
          onWrongEnd={clearWrong}
          onCellClick={handleCellClick}
          firstCellRef={firstCellRef}
        />
      )}

      {page === "ranking" && <Ranking />}

      {result && (
        <Modal
          title={`Level ${result.level} 클리어!`}
          onClose={handelCloseResult}
        >
          {formatTime(result.playTime)}
        </Modal>
      )}
    </>
  );
}

export default App;
