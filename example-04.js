let number = 10485760193;
let isPrimeNumber = true;
let n = 2;
while (n < number / 2) {
  if (number % n === 0) {
    isPrimeNumber = false;
    break;
  }
  n++;
}
if (isPrimeNumber) {
  console.log(number + " es primo");
} else {
  console.log(number + " no es primo");
}
