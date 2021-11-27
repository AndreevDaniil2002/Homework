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
