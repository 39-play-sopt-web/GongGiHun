import * as S from "./GameBoard.styles";

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
    <S.Wrapper>
      <S.Status>
        다음 숫자 <S.NextNumber>{next}</S.NextNumber>({next} / {total})
      </S.Status>
      <S.Grid $size={size}>
        {cells.map((number, index) => (
          <S.Cell
            key={index}
            $shake={index === wrongIndex}
            onAnimationEnd={onWrongEnd}
            $empty={number === null}
            onClick={() => onCellClick(index)}
          >
            {number}
          </S.Cell>
        ))}
      </S.Grid>
    </S.Wrapper>
  );
}

export default GameBoard;
