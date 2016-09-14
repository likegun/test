var maxLength = Math.pow(2, 32);
var arr = [];
arr[maxLength - 2] = maxLength -1;

console.log(arr.length);

arr[maxLength] = maxLength;
console.log(arr.length);
