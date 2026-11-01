import * as S from "./Timer.styles";
import { formatTime } from "../../utils/format";

function Timer({ elapsed }) {
  return <S.Time>{formatTime(elapsed)}</S.Time>;
}

export default Timer;
