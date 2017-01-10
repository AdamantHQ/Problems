line("<br>");
line("<h1>Methods of objects</h1>");

line("#1 Chaining");

let ladder = {
  step: 0,
  up: function() { // вверх по лестнице
    this.step++;
    return this;
  },
  down: function() { // вниз по лестнице
    this.step--;
    return this;
  },
  showStep: function() { // вывести текущую ступеньку
    line("", this.step );
    return this;
  }
};

ladder.up().up().down().up().down().showStep();

line("#2 Sum");
