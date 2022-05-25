// sebuah function bisa menerima function lain sebagai parameternya. Function sperti ini dikenal dengan higher order function

const strArray = ["javascript", "Java", "C"];
function helo(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
}

const items = (item) => {
  return item.length;
};
const lenArray = helo(strArray, items);
console.log(lenArray);
