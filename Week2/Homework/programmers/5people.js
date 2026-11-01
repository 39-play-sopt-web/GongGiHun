function solution(names) {
  const answer = names.filter((_, i) => i % 5 === 0);
  console.log(answer);

  return answer;
}
