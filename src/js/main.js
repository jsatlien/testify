function fizz (num) {
  if (num % 5 === 0 && num % 3 === 0) {
    return "fizzbuzz";
  } else if (num % 5 === 0) {
      return "buzz";
  } else if (num % 3 === 0 ) {
    return "fizz";
  } else {
      return num;
  };
};

function fizzBuzz (start, end) {
  for (var i = start; i <= end; i++) {
    console.log(fizz(i));
  };
};

export { fizz };
