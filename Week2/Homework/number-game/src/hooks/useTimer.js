import { useEffect, useState } from "react";

// startTime, endTime을 받아 화면에 보여줄 경과 시간을 돌려줌
function useTimer(startTime, endTime) {
  const [now, setNow] = useState(() => performance.now());
  const running = startTime !== null && endTime === null;

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setNow(performance.now()), 10);
    return () => clearInterval(id);
  }, [running]);

  if (startTime === null) return 0;
  return Math.max(0, (endTime ?? now) - startTime); // 진행 중 : now 기준, 종료 후 : endTime 기준
}

export default useTimer;
