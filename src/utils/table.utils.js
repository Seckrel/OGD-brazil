const arrayRange = (arr, start, end) => arr.slice(start, end);
const keyListGenerator = (row) => Object.keys(row);

export { arrayRange, keyListGenerator };
