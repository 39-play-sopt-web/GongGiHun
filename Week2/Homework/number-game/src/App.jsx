import { useState } from "react";
import Header from "./components/Header/Header";
import GameBoard from "./components/GameBoard/GameBoard";
import Ranking from "./components/Ranking/Ranking";
import useGame from "./hooks/useGame";
import Modal from "./components/Modal/Modal";
import { formatTime } from "./utils/format";

function App() {
  const [page, setPage] = useState("game");
  const {
    cells,
    next,
    total,
    elapsed,
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

  return (
    <>
      <Header
        page={page}
        onPageChange={handlePageChange}
        level={level}
        onLevelChange={startNewGame}
        elapsed={elapsed}
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
        />
      )}

      {page === "ranking" && <Ranking />}

      {result && (
        <Modal title={`Level ${result.level} 클리어!`} onClose={closeResult}>
          {formatTime(result.playTime)}
        </Modal>
      )}
    </>
  );
}

export default App;
