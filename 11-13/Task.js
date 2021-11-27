//Задание 1
console.log('Задание 1');

let city1 = {};
city1.name = "ГородN";
city1.population = "10 000 000";
console.log('Название: ' + city1.name + ', Население: ' + city1.population);

console.log('\n');


//Задание 2
console.log('Задание 2');

let city2 = {name: "ГородM", population: '1000000'};
console.log('Название: ' + city2.name + ', Население: ' + city2.population);

console.log('\n');

//Задание 3
console.log('Задание 3'); 

function getName() {
    return this.name;
}

city1.getName = getName;
city2.getName = getName;

console.log(city1.getName());
console.log(city2.getName());

console.log('\n');

//Задание 4
console.log('Задание 4'); 

function exportStr() {
    return name=${this.name}\n population=${this.population}\n; 
}
city1.exportStr = exportStr;
city2.exportStr = exportStr;

console.log(city1.exportStr());
console.log(city2.exportStr());

console.log('\n');

//Задание 5
console.log('Задание 5');

function getObj () { return this }
 
city1.getCity = getObj;
city2.getCity = getObj;
 
console.log(city1.getCity().name + ' ' + city1.getCity().population);
console.log(city2.getCity().name + ' ' + city2.getCity().population);

//Задание 15

function Card(from, to) {
    this.from = from;
    this.to = to;
    this.show = function(){
        console.log(this.from +" "+ this.to);
    };
}

let c1 = ["Москва", "Екатеренбург"]
var c = new Card(c1[0], c1[1]);
c.show();


//Задание 16

class Human{
    constructor(name, age, height){
    this.name = name,
    this.age = age,
    this.height = height
    }
    getInfo() {
    return [this.name, this.age, this.height];
    }
    get firstname() {
        return this.name;
        }
}
let humans = [
    new Human("Коля", 23, 180),
    new Human("Даша", 19, 170),
    new Human("Ваня", 18, 192),
    new Human("Петя", 45, 178),
    new Human("Вася", 34, 197),
    new Human("Джони", 40, 168),
    new Human("Катя", 37, 160),
    new Human("Петя", 29, 200),
    new Human("Соня", 21, 172),
    new Human("Женя", 25, 175)
    ];

for (let human of humans)
    console.log(human.getInfo());

console.log('\n');


//Задание 17

function sortByName(arr) {
    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
}


var users = [["Aнна",154], ["Даниил",186], ["Василий",174]]
console.log(sortByName(users))

function sortByHeight(arr) {
    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j][1] < arr[j + 1][1]) {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
}

console.log(sortByHeight(users))


//Задание 18


var dt1 = new Date(2045, 0, 1, 00, 00, 00, 0); 
console.log(dt1);


//Задание 19

var dt2= parseInt(+new Date()/1000);
console.log(dt2);
console.log('\n');


//Задание 20

function getDays(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth-1, 32).getDate();
}

console.log(getDays(2,2021))
