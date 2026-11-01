import * as S from "./Header.styles";
import Select from "../Select/Select";
import Timer from "../Timer/Timer";
import { LEVELS } from "../../constants/level";

const LEVEL_OPTIONS = Object.entries(LEVELS).map(([level, { size }]) => ({
  value: Number(level),
  label: `Level ${level} (${size}x${size})`,
}));

function Header({ page, onPageChange, level, onLevelChange, elapsed }) {
  return (
    <S.Wrapper>
      <S.Logo>숫자 클릭 게임</S.Logo>
      <S.Nav>
        <S.Tab $active={page === "game"} onClick={() => onPageChange("game")}>
          게임
        </S.Tab>
        <S.Tab
          $active={page === "ranking"}
          onClick={() => onPageChange("ranking")}
        >
          랭킹
        </S.Tab>
      </S.Nav>

      <S.Right>
        {page === "game" && (
          <>
            <Select
              value={level}
              onChange={onLevelChange}
              options={LEVEL_OPTIONS}
            />
            <Timer elapsed={elapsed} />
          </>
        )}
      </S.Right>
    </S.Wrapper>
  );
}

export default Header;
