function solution(num_list) {
  return num_list.length >= 11
    ? num_list.reduce((acc, n) => acc + n, 0)
    : num_list.reduce((acc, n) => acc * n, 1);
}
