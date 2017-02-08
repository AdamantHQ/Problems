line("<h1>Object for in</h1>");
line("#1 Is object empty?");

let schedule = {};

line("Object is empty?", Object.keys(schedule).length === 0);

schedule["8:30"] = "подъём";

line("And now?", Object.keys(schedule).length === 0);

let salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250,
  "Victor": 200
};

line("#2 Sum of properties!");

let salariesSum = Object.values(salaries).reduce((a, b) => a + b);

line("Sum is", salariesSum);


line("#3 Biggest value");

let salariesBiggest = Object.keys(salaries).reduce((a, b) => salaries[a] > salaries[b] ? a : b );

line("Biggest value is", salariesBiggest);

line("#4 Multiplied by two");

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(menu) {
  Object.keys(menu).forEach(function(item) {
    menu[item] = menu[item] * 2 || menu[item];
  });
}

multiplyNumeric(menu);

line("New object properties are", `${menu.width}, ${menu.height}, ${menu.title}`);