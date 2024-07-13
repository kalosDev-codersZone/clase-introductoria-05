let listOfRents = [
  { propertyRent: 4000, costOfCarRental: 2000, services: 1000 },
  { propertyRent: 8000, costOfCarRental: 4000, services: 3000 },
  { propertyRent: 10000, costOfCarRental: 8000, services: 5000 },
];
let listOfRentsClone = JSON.parse(JSON.stringify(listOfRents));
listOfRentsClone.map((item) => {
  let total = item.propertyRent + item.costOfCarRental + item.services;
  return (item.total = total);
});
console.log(listOfRents);
console.log(listOfRentsClone);
console.log(listOfRents);
