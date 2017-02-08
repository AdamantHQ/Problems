line("<h1>Call</h1>");

line("#1 Arguments' sum");

function sumArgs() {
  return [].reduce.call(arguments, (a, b) => a + b);
}

line("Sum of 1, 2, 3 is ", sumArgs(1, 2, 3) );

line("#2 Function to arguments");

function sum() { // суммирует аргументы: sum(1,2,3) = 6
  return [].reduce.call(arguments, function(a, b) {
    return a + b;
  });
}

function mul() { // перемножает аргументы: mul(2,3,4) = 24
  return [].reduce.call(arguments, function(a, b) {
    return a * b;
  });
}

function applyAll(func, ...args) {
  return func(...args);
}

alert( applyAll(sum, 1, 2, 3) ); // -> sum(1, 2, 3) = 6
alert( applyAll(mul, 2, 3, 4) ); // -> mul(2, 3, 4) = 24
alert( applyAll(Math.max, 2, -2, 3) ); // 3