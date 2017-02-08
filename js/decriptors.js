line("<h1>New</h1>");

line("#1 Descriptors");

function User(fullName) {
  this.fullName = fullName;

  Object.defineProperties(this, {
    firstName: {
      get() {
        return this.fullName.split(" ")[0]
      },
      set(value) {
        this.fullName = value + " " + this.fullName.split(" ")[1];
      }
    },
    lastName: {
      get() {
        return this.fullName.split(" ")[1]
      },
      set(value) {
        this.fullName = this.fullName.split(" ")[0] + " " + value;
      }
    }
  });
}



var vasya = new User("Василий Попкин");



// чтение firstName/lastName


// запись в lastName
vasya.lastName = 'Сидоров';
vasya.firstName = "Миша";



line("Output:", "a");


line("#1 Static and fabric methods");

function Article() {
  this.created = new Date();
  Article.total++;
  Article.created = this.created;
}

Article.total = 0;

Article.showStats = function() {
  line("Всего: ", this.total);
  line("Последняя: ", this.created);
};

new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)

new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)