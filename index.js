let fizzText = "";
for (let i = 1; i <= 1000; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    fizzText += 'FizzBuzz\n';
  } else if (i % 3 === 0) {
    fizzText += 'Fizz\n';
  } else if (i % 5 === 0) {
    fizzText += 'Buzz\n';
  } else {
    fizzText += (i + '\n');
  }
}
console.log(fizzText);
