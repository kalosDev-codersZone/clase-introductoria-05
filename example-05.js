let first = (parameter) => {
  return "welcome to " + parameter;
};
console.log(first("the fifth part"));

let second = (theFunction, add) => {
  return theFunction(add);
};
console.log(second(first, "the introduction curse"));
