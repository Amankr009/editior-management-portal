export function getLineChartData(data) {
  const counts = data.map(item => item.count);
  const dates = data.map(item => item.date);
  return { counts, dates };
}