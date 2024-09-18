let fizzText = "";
function multiplo(numero, numMultiplo) {
    return numero % numMultiplo === 0
}
for (let i = 1; i <= 1000; i++) {
  if (multiplo(i,3) && multiplo(i,5)) {
    fizzText += 'FizzBuzz\n';
  } else if (multiplo(i,3)) {
    fizzText += 'Fizz\n';
  } else if (multiplo(i,5)) {
    fizzText += 'Buzz\n';
  } else {
    fizzText += (i + '\n');
  }
}
console.log(fizzText);