const strArray = ["Resky", "Bayu", "Andhika"];
function forEach(array, callback) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(callback(array[i]));
  }
  return arr;
}

const items = (item) => {
  return item.length;
};

const len = forEach(strArray, items);
console.log(len);
