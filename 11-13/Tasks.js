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

//Задание 6

console.log("Задание 6")
var obj = {
    method1: function() {
        return this;
    },
    method2: function() {
        return this;
    },
    method3: function() {
       console.log("метод3")
    }
}

obj.method1().method2().method3()


//Задание 7

console.log("Задание 7")
let d1 = [45, 78, 10, 3];

d1[7] = 100;

for (let i = 0; i < d1.length; i++){
    console.log(d1[i])
}

//Задание 8

console.log("Задание 8")
let d2 = [45, 78, 10, 3];
let summ2 = 0;

for (let i = 0; i < d2.length; i++){
    summ2 += d2[i]
}

console.log(summ2)


//Задание 9
console.log("Задание 9")

let d3 = [45, 78, 10, 3]
d3[7] = 100
let sum3 = 0
for(let el in d3) {
    sum3 += d3[el]
} 
console.log(sum3)


//Задание 10
console.log("Задание 10")

let d4 = [45, 78, 10, 3]


d4.sort(function my(a,b) {
    return b - a
})

console.log(d4)


//Задание 11

console.log("Задание 11")
let d5 = []
let c = 0

for (let i = 0; i < 3; i++){
    d5[i] = []
    for (let j = 0; j < 4; j++){
        d5[i][j] = c;
        c++;
    }
}

console.log(d5)


//Задание 12
console.log('Задание 12');
function Vector(x, y) {
    this.x = x;
    this.y = y;
}
Vector.prototype.plus = function plus(otherVector) {
    var x = this.x + otherVector.x;
    var y = this.y + otherVector.y;
    return new Vector(x, y);
};
Vector.prototype.minus = function minus(otherVector) {
    var x = this.x - otherVector.x;
    var y = this.y - otherVector.y;
    return new Vector(x, y);
};
Vector.prototype.length = function length() {
    return Math.sqrt(this.x*this.x+this.y*this.y)
}

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log("Длинна вектора: "+ new Vector(3, 4).length());

console.log('\n');

//Задание 13
console.log('Задание 13');

function StretchCell(inner, width, height) {
	this.inner = inner;
	this.width = width;
	this.height = height;
}

function repeat(string, times) {
	let result = "";
	for (let i = 0; i < times; ++i)
		result += string;
	return result;
}

function TextCell(text) {
	this.text = text.split("\n");
}

TextCell.prototype.minWidth = function() {
	return this.text.reduce(function(width, line) { return Math.max(width, line.length); }, 0);
};
TextCell.prototype.minHeight = function() {
	return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
	let result = [];

	for (let i = 0; i < height; ++i) {
		let line = this.text[i] || "";
		result.push(line + repeat(" ", width - line.length));
	}
	return result;
};


StretchCell.prototype.minWidth = function() {
	return Math.max(this.width, this.inner.minWidth());
};
StretchCell.prototype.minHeight = function() {
	return Math.max(this.height, this.inner.minHeight());
};
StretchCell.prototype.draw = function(width, height) {
	return this.inner.draw(width, height);
}


var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
console.log(sc.minHeight());
console.log(sc.draw(3, 2));

console.log('\n');


//Задание 14
console.log('Задание 14');

function logFive (next){
    len=next.length;
    if (len>5){
        len =5;
    }
    for (var i = 0; i < len; i++) {
        console.log(next[i]);
    }
}

function ArSeq(arr){
    self.mass=[];
    for (let i in arr){
        self.mass.push(arr[i]);
        }
    return(self.mass)
    
}
function RangeSeq(from, to){
    this.from = from;
    this.to = to;
    self.mass=[];
    for (var i = from; i < to; i++){
        self.mass.push(i);
    }
    return(self.mass)
    
}


logFive(new ArSeq([1, 2]));
console.log('\n');
logFive(new RangeSeq(100, 1000));


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


//Задание 22

console.log("Задание 22")

Number.prototype.isOdd = function(num) { if (num % 2 == 1) return true; else return false;}

let a = 10;
let b = a.isOdd(a)
console.log(b)


//Задание 23
console.log("Задание 23")

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      console.log(this.step);
      return this;
    }
  }
  
ladder.up().up().down().up().down().showStep();
