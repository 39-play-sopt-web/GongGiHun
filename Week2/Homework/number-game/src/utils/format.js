export const formatTime = (ms) => `${(ms / 1000).toFixed(2)}초`;

export const formatDate = (timestamp) =>
  new Date(timestamp).toLocaleString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
