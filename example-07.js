let equilateralTriangle = {
  numberOfSides: 3,
};
function inserInternalAngle(figure, angle) {
  let triangle = structuredClone(figure);
  triangle.internalAngle = angle;
  return triangle;
}
console.log(equilateralTriangle);
console.log(inserInternalAngle(equilateralTriangle, 60));
console.log(equilateralTriangle);
