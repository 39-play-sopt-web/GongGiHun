import { Time } from "./Timer.styles";

function Timer({ elapsed }) {
  return <Time>{(elapsed / 1000).toFixed(2)}초</Time>;
}

export default Timer;
