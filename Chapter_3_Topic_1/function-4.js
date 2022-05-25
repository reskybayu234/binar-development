const strArray = ["javascript", "java", "c"];
function forEach(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
}

const items = (item) => {
  return item.length;
};
const lenArray = forEach(strArray, items);
console.log(lenArray);
