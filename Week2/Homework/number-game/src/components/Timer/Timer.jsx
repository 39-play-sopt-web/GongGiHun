import * as S from "./Timer.styles";
import { formatTime } from "../../utils/format";
import useTimer from "../../hooks/useTimer";

function Timer({ startTime, endTime }) {
  const elapsed = useTimer(startTime, endTime);
  return <S.Time>{formatTime(elapsed)}</S.Time>;
}

export default Timer;
