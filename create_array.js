// Create not sorted array
module.exports = n => {
  if (!Number.isFinite(n)) return [];

  console.time('Create process');
  const notSortedArray = [];

  for (let i = 0; i < n; i++) {
    notSortedArray.push(Math.ceil(Math.random() * 100 * (Date.now() / 1000000000)));
  }
  console.timeEnd('Create process');

  return notSortedArray;
}
