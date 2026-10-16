import { useState } from "react";
import {
  Wrapper,
  TitleRow,
  Title,
  ResetButton,
  Table,
  Rank,
  Empty,
} from "./Ranking.styles";

import { formatDate, formatTime } from "../../utils/format";
import { clearRecords, getRecords } from "../../utils/storage";

function Ranking() {
  const [records, setRecords] = useState(getRecords);
  // 레벨 내림차순 조건 추가
  // a b 비교 시 양수면 b가 앞, 음수면 a가 앞.,, 이런식
  const sorted = [...records].sort(
    (a, b) => b.level - a.level || a.playTime - b.playTime,
  );

  //초기화
  const handleReset = () => {
    clearRecords();
    setRecords([]);
  };

  return (
    <Wrapper>
      <TitleRow>
        <Title>랭킹</Title>
        <ResetButton onClick={handleReset}>초기화</ResetButton>
      </TitleRow>
      {sorted.length === 0 ? (
        <Empty> 아직 기록이 없어요..</Empty>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>순위</th>
              <th>레벨</th>
              <th>플레이 시간</th>
              <th>기록 시각</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((record, index) => (
              <tr key={record.playedAt}>
                <Rank>{index + 1}</Rank>
                <td>Level {record.level}</td>
                <td>{formatTime(record.playTime)}</td>
                <td>{formatDate(record.playedAt)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Wrapper>
  );
}

export default Ranking;
