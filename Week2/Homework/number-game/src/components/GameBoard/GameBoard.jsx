import { Wrapper, Status, NextNumber, Grid, Cell } from "./GameBoard.styles";

function GameBoard({
  cells,
  next,
  total,
  size,
  onCellClick,
  wrongIndex,
  onWrongEnd,
}) {
  return (
    <Wrapper>
      <Status>
        다음 숫자 <NextNumber>{next}</NextNumber>({next} / {total})
      </Status>
      <Grid $size={size}>
        {cells.map((number, index) => (
          <Cell
            key={index}
            $shake={index === wrongIndex}
            onAnimationEnd={onWrongEnd}
            $empty={number === null}
            onClick={() => onCellClick(index)}
          >
            {number}
          </Cell>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default GameBoard;
