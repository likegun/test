var obj = {
  "one": 1,
  "two": 2,
};

var jsonStr = JSON.stringify(obj, function(key, value) {
  if(!key)
    return value;
  else
    return value + 1;
});

console.log(jsonStr);


obj = JSON.parse(jsonStr, function(key, value) {
  if(!key)
    return value;
  return value + 1;
});

console.log(obj);
