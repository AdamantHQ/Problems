line("<br>");
line("<h1>Arrays</h1>");

line("#1 The element of the array");

arr1 = ["test", 2, 1.5, false];

function find(arr, value) {
  let position = 0;
  arr.forEach((item, i) => {
    if (item == value) position = i;
  });
  return position || -1;
}

line("Result of search is: ", find(arr1, 2.5));

line("#2 Range filter");

let arr2 = [5, 4, 3, 8, 0, 3, 7, 6, -8, NaN];

function filterRange(arr, a, b) {
  return arr.filter(item => item >= a && item <= b);
}


let filtered = filterRange(arr2, 3, 5);

line("New array is", filtered);

line("#3 Add class to the string");


function addClass(obj, cls) {
  let arr = obj.className.split(" ");
  if (arr.indexOf(cls) === -1) {
    arr.push(cls);
    obj.className = arr.join(" ");
  }
}

{
  let obj = {
    className: 'open menu'
  };

  addClass(obj, 'new'); // obj.className='open menu new'
  line("Object classname now is: ", obj.className);
  addClass(obj, 'open'); // без изменений (класс уже существует)
  line("Object classname now is: ", obj.className);
  addClass(obj, 'me'); // obj.className='open menu new me'
  line("Object classname now is: ", obj.className);
}

line("#4 Sort in reversed order");

{
  let arr = [5, 2, 1, -10, 8];
  arr.sort((a, b) => a < b);
  line("Now arr is ", arr);
}

line("#5 Linked list");

function printList(list) {
  let arr = [], obj = list;
  while (obj) {
    arr.push(obj.value);
    obj = obj.next;
  }
  return arr;
}

let arr3 = [];

function printListRec(list) {
  arr3.push(list.value);
  if (list.next) printListRec(list.next);
}

let arr3_1 = [];

function printListRecReversed(list) {
  if (list.next) printListRecReversed(list.next);
  arr3_1.push(list.value);
}


{
  let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  printListRec(list);
  printListRecReversed(list);
  line("Array is ", printList(list));
  line("Array is ", arr3);
  line("Array is ", arr3_1);
}