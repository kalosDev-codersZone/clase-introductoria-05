//ax+b=c c=ax+b ax=c c=ax
//x=(c-b)/a
const myRegex = /[x]/i;
function first(list) {
  if (myRegex.test(list[0]) === true) {
    let one = list[0].match(/([-+]?\d*\.?\d*)x/g);
    let firstVariable = parseFloat(one);
    return firstVariable;
  } else {
    let one = list[1].match(/([-+]?\d*\.?\d*)x/g);
    let firstVariable = parseFloat(one);
    return firstVariable;
  }
}
function second(list) {
  if (myRegex.test(list[0]) === true) {
    let three = list[0].match(/([+-]?\d*\.?\d*)/g);
    let news = three.filter((item) => {
      return item !== "";
    });
    let four = news.map((item) => {
      return parseFloat(item);
    });
    let variableA = first(list);
    if (four.length === 1) {
      return 0;
    } else {
      if (four[0] == variableA) {
        return four[1];
      } else {
        return four[0];
      }
    }
  } else {
    let three = list[1].match(/([+-]?\d*\.?\d*)/g);
    let news = three.filter((item) => {
      return item !== "";
    });
    let four = news.map((item) => {
      return parseFloat(item);
    });
    let variableA = first(list);
    if (four.length === 1) {
      return 0;
    } else {
      if (four[0] == variableA) {
        return four[1];
      } else {
        return four[0];
      }
    }
  }
}

function third(list) {
  if (myRegex.test(list[0]) === true) {
    let numberThree = parseFloat(list[1]);
    return numberThree;
  } else {
    let numberThree = parseFloat(list[0]);
    return numberThree;
  }
}
function result(a, b, c) {
  const valueX = (c - b) / a;
  return valueX;
}

function print() {
  let inputEquation = document.getElementById("equation").value;
  let sidesOfEquation = inputEquation.split("=");
  let valX = result(
    first(sidesOfEquation),
    second(sidesOfEquation),
    third(sidesOfEquation)
  );
  document.getElementById("result").textContent = `El valor de x es: ${valX}`;
}

console.log(first(sidesOfEquation));
console.log(second(sidesOfEquation));
console.log(third(sidesOfEquation));
