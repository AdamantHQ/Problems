"use strict";

let list = document.querySelector(".problems__list");

function line(statement, answer) {
  if (answer == undefined) return list.insertAdjacentHTML("beforeEnd", `<h2>${statement}</h2>`);
  list.insertAdjacentHTML("beforeEnd", `<p>${statement}&nbsp;${answer}</p>`);

}