import { useState } from "react";
import Header from "./components/Header/Header";

function App() {
  const [page, setPage] = useState("game");
  const [level, setLevel] = useState(1);

  return (
    <Header
      page={page}
      onPageChange={setPage}
      level={level}
      onLevelChange={setLevel}
    />
  );
}

export default App;
