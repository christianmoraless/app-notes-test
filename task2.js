function multiplyByClosure(mult) {
  const values = [0, 0.5, 1, 2, 3, 4, 5].filter(Number);
  return values.map(function (value) {
    return value * mult;
  });
}

function countNonZeroValues(values) {
  return values.filter(function (value) {
    return value !== 0;
  }).length;
}

const multiplyByTwo = multiplyByClosure(2);
console.log(multiplyByTwo);

const multiplyByThree = multiplyByClosure(3);
console.log(multiplyByThree);

console.log(countNonZeroValues(multiplyByTwo));

for (let i = 0; i < 10; i++) {
  const button = document.createElement("button");
  button.textContent = `Multiply by ${i}`;
  document.body.appendChild(button);

  button.onclick = function () {
    console.log(multiplyByClosure(i));
  };
}
