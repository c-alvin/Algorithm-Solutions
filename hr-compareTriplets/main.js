// eslint-disable-next-line no-unused-vars
function compareTriplets(a, b) {
  let pointsA = 0;
  let pointsB = 0;

  const pointsArray = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      pointsA++;
    }

    if (a[i] < b[i]) {
      pointsB++;
    }
  }
  pointsArray.push(pointsA);
  pointsArray.push(pointsB);

  return pointsArray;

}
