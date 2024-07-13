let number = 89678668989988;
let remainders = [];
for (let i = 1; i <= number; i++) {
  remainders.push(number % i);
}
let zeros = remainders.filter((item) => {
  return item === 0;
});
if (zeros.length > 2) {
  console.log(number + " no es primo");
} else {
  console.log(number + " es primo");
}
