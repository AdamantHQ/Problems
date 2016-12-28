"use strict";

let list = document.querySelector(".problems__list");

function line(statement, answer) {
  if (answer == undefined) return list.insertAdjacentHTML("beforeEnd", `<h2>${statement}</h2>`);
  list.insertAdjacentHTML("beforeEnd", `<li>${statement}&nbsp;${answer}</li>`);

}

line("#1 Is object empty?");

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

let schedule = {};

line("Object is empty?", isEmpty(schedule));

schedule["8:30"] = "подъём";

line("And now?", isEmpty(schedule));



let salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

line("#2 Sum of properties!");

let salariesSum = Object.values(salaries).reduce((a, b) => a + b);

line("Sum is", salariesSum);


line("#3 Biggest value");

