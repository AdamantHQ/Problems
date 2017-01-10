line("<br>");
line("<h1>Closures</h1>");

line("#1 Buffer");

function makeBuffer() {
  let buffer = "";
  function bfr(str) {
    if (arguments.length == 0) return buffer;
    buffer += str;
  }
  bfr.clear = function() {
    buffer = "";
  };

  return bfr;
}

let buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer.clear();
buffer(' Нужно!');

// получить текущее значение
line("Result is ", buffer());


let buffer1 = makeBuffer();
buffer1(0);
buffer1(1);
buffer1(0);

line("Result is ", buffer1());

line("#2 sorting");

