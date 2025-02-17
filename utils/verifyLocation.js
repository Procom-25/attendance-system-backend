const CsArea = [
  [24.857117, 67.265088],
  [24.856907, 67.264133],
  [24.856465, 67.264248],
  [24.85668, 67.265217],
];
const eeArea = [
  [24.856940, 67.263326],
  [24.856112, 67.263527],
  [24.85623, 67.264025],
  [24.857074, 67.263874],
];

const lab7Area=[[
  24.856321, 67.263942],
  [24.856501, 67.263891],
  [24.856401, 67.264216],
  [24.856552, 67.264182],
  ];
// RAY Casting Algorithm 
const isPointInPolygon = (x, y, polygon) => {
  let inside = false;
  let n = polygon.length;

  for (let i = 0, j = n - 1; i < n; j = i++) {
    let [xi, yi] = polygon[i];
    let [xj, yj] = polygon[j];

    let intersect =
      yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;

    if (intersect) inside = !inside;
  }
  return inside;
};

const isInsideAnyArea = (x, y) => {
  return isPointInPolygon(x, y, CsArea) || isPointInPolygon(x, y, eeArea) || isPointInPolygon(x,y,lab7Area);
};
export default isInsideAnyArea;