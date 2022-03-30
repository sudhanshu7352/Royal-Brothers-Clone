const arr = [1, 2, 3, 4];
const copyOFArr = arr;

console.log(arr == copyOFArr);

copyOFArr[4] = 10;

console.log(arr == copyOFArr);
