const strArray = ["Javascript", "Java", "PHP"];
function forEach(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
}

const items = (item) => {
  return item.length;
};

console.log(forEach(strArray, items));
