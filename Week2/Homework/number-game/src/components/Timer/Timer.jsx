import { Time } from "./Timer.styles";
import { formatTime } from "../../utils/format";

function Timer({ elapsed }) {
  return <Time>{formatTime(elapsed)}</Time>;
}

export default Timer;
