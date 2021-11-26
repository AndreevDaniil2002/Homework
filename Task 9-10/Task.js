//Задание 1
let str = "";
while (str.length<7) console.log(str+="#");

//Задание 2
for (let i = 1; i <101; i++){
    if (i%3 == 0){
        if (i%5 == 0){
            console.log("FizzBuzz");
        }
        console.log("Fizz");
    }
    else if (i%5 == 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}

//Задание 3

for (let i = 0; i < 8; i++){
    let str = "";
    for (let j = 0; j < 8; j++){
        
        if (i%2 == 0){
            if (j%2 == 0){
                str += "#";
            }
            else{
                str += " ";
            }
        }
        else{
            if (j%2 == 0){
                str += " ";
            }
            else{
                str += "#";
            }
       }
    }
    console.log(str);
}

// Задание 4

function minimal(a, b){
    if (a < b){
        return a;
    }
    else{
        return b;
    }
}

console.log(minimal(13, 4));

//Задание 5
function countBs(string){
    let count = 0;
    for (let i = 0; i < string.length; i++){
        if (string.charAt(i) == 'B'){
            count++;
        }
    }
    return count;
}
console.log(countBs("BBBsadfBB"));

function countChar(string, element){
    let count = 0;
    for (let i = 0; i < string.length; i++){
        if (string.charAt(i) == element){
            count++;
        }
    }
    return count;
}

console.log(countChar("abcdega", 'a'));

//Задание 6

function range(a, b, c = 1){
    let arr = new Array();
    let j = 0;
    if (a < b){
        for (let i = 0; i < (b-a) + 1; i += c){
            arr[j] = i+a;
            j++;
        }
    } 
    else{
        for (let i =(a-b+1); i > 0; i += c){
            arr[j] = i+b-1;
            j++;
        }
    }
    return arr;

}


function summ(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

let array = (range(1,54,53));
console.log(array);
console.log(summ(array));

//Задание 7

function reverseArray(arr){
    n_arr = [];
    let j = 0;
    for (let i = arr.length-1; i > -1; i--){
        n_arr[j] = arr[i];
        j++;
    }
    return n_arr;
}

console.log(reverseArray([1,2,3,4,5]));

function reverseArrayInPlace(arr){
    for (let i = 0; i < arr.length/2; i++){
        let t = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = t;
    }
    return arr;
}

console.log(reverseArrayInPlace([1,2,3,4,5,6,7,8,12]));


//Задание 8

var arrayToList = function (arr) {
    var result = null;
    for (var i = arr.length-1; i >= 0; i--) {
        result = { 
            value: arr[i],
            rest:  result
        }
    }
    return result;
}

var listToArray = function (list) {
    var result = [];
    do { 
        result.push(list.value);
        list = list.rest;
    } while ( list !== null )
    return result;
};

var prepend = function (el, list) {
    return { 
        value: el,
        rest:  list
    }
}

var nth = function (list, ind) {
    if ( !list ) {
        return undefined;
    } else if ( ind === 0 ) {
            return list.value
    } else {
        return nth(list.rest, ind-1)
    }
}

console.log(arrayToList([10, 20]));

console.log(listToArray(arrayToList([10, 20, 30])));

console.log(prepend(10, prepend(20, null)));

console.log(nth(arrayToList([10, 20, 30]), 0));

//Задание 9

function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
 
    if (a == null || typeof(a) != "object" ||
        b == null || typeof(b) != "object")
    {
        return false;
    }
 
    var propertiesInA = 0, propertiesInB = 0;
    for (var property in a) {
        propertiesInA += 1;
    }
    for (var property in b) {
        propertiesInB += 1;
        if (!(property in a) || !deepEqual(a[property], b[property])) {
            return false;        
        }
    }        
    return propertiesInA == propertiesInB;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, {here: 1, object: 2}));

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));


//Задание 10
let arrays = [[1, 2, 3], [4,5,6,7,8], [9,10]]; 
console.log(arrays.reduce((flat,current) => flat.concat(current), []));


//Задание 11

let data = [
    {name: "Carolus Haverbeke", sex: "m", born: 1832, died: 1905, father: "Carel Haverbeke", mother: "Maria van Brussel"},
    {name: "Emma de Milliano",sex: "f",born: 1876,died: 1956,father: "Petrus de Milliano",mother: "Sophia van Damme"},
    {name: "Maria de Rycke",sex: "f",born: 1683,died: 1724,father: "Frederik de Rycke",mother: "Laurentia van Vlaenderen"},
    {name: "Jan van Brussel",sex: "m",born: 1714,died: 1748,father: "Jacobus van Brussel",mother: "Joanna van Rooten"},
    {name: "Philibert Haverbeke",sex: "m",born: 1907,died: 1997,father: "Emile Haverbeke",mother: "Emma de Milliano"},
    {name: "Jan Frans van Brussel",sex: "m",born: 1761,died: 1833,father: "Jacobus Bernardus van Brussel",mother: null},
    {name: "Pauwels van Haverbeke",sex: "m",born: 1535,died: 1582,father: "N. van Haverbeke",mother: null},
    {name: "Clara Aernoudts",sex: "f",born: 1918,died: 2012,father: "Henry Aernoudts",mother: "Sidonie Coene"},
    {name: "Emile Haverbeke",sex: "m",born: 1877,died: 1968,father: "Carolus Haverbeke",mother: "Maria Sturm"},
    {name: "Lieven de Causmaecker",sex: "m",born: 1696,died: 1724,father: "Carel de Causmaecker",mother: "Joanna Claes"},
    {name: "Pieter Haverbeke",sex: "m",born: 1602,died: 1642,father: "Lieven van Haverbeke",mother: null},
    {name: "Livina Haverbeke",sex: "f",born: 1692,died: 1743,father: "Daniel Haverbeke",mother: "Joanna de Pape"},
    {name: "Pieter Bernard Haverbeke",sex: "m",born: 1695,died: 1762,father: "Willem Haverbeke",mother: "Petronella Wauters"},
    {name: "Lieven van Haverbeke",sex: "m",born: 1570,died: 1636,father: "Pauwels van Haverbeke",mother: "Lievijne Jans"},
    {name: "Joanna de Causmaecker",sex: "f",born: 1762,died: 1807,father: "Bernardus de Causmaecker",mother: null},
    {name: "Willem Haverbeke",sex: "m",born: 1668,died: 1731,father: "Lieven Haverbeke",mother: "Elisabeth Hercke"},
    {name: "Pieter Antone Haverbeke",sex: "m",born: 1753,died: 1798,father: "Jan Francies Haverbeke",mother: "Petronella de Decker"},
    {name: "Maria van Brussel",sex: "f",born: 1801,died: 1834,father: "Jan Frans van Brussel",mother: "Joanna de Causmaecker"},
    {name: "Angela Haverbeke",sex: "f",born: 1728,died: 1734,father: "Pieter Bernard Haverbeke",mother: "Livina de Vrieze"},
    {name: "Elisabeth Haverbeke",sex: "f",born: 1711,died: 1754,father: "Jan Haverbeke",mother: "Maria de Rycke"},
    {name: "Lievijne Jans",sex: "f",born: 1542,died: 1582,father: null,mother: null},
    {name: "Bernardus de Causmaecker",sex: "m",born: 1721,died: 1789,father: "Lieven de Causmaecker",mother: "Livina Haverbeke"},
    {name: "Jacoba Lammens",sex: "f",born: 1699,died: 1740,father: "Lieven Lammens",mother: "Livina de Vrieze"},
    {name: "Pieter de Decker",sex: "m",born: 1705,died: 1780,father: "Joos de Decker",mother: "Petronella van de Steene"},
    {name: "Joanna de Pape",sex: "f",born: 1654,died: 1723,father: "Vincent de Pape",mother: "Petronella Wauters"},
    {name: "Daniel Haverbeke",sex: "m",born: 1652,died: 1723,father: "Lieven Haverbeke",mother: "Elisabeth Hercke"},
    {name: "Lieven Haverbeke",sex: "m",born: 1631,died: 1676,father: "Pieter Haverbeke",mother: "Anna van Hecke"},
    {name: "Martina de Pape",sex: "f",born: 1666,died: 1727,father: "Vincent de Pape",mother: "Petronella Wauters"},
    {name: "Jan Francies Haverbeke",sex: "m",born: 1725,died: 1779,father: "Pieter Bernard Haverbeke",mother: "Livina de Vrieze"},
    {name: "Maria Haverbeke",sex: "m",born: 1905,died: 1997,father: "Emile Haverbeke",mother: "Emma de Milliano"},
    {name: "Petronella de Decker",sex: "f",born: 1731,died: 1781,father: "Pieter de Decker",mother: "Livina Haverbeke"},
    {name: "Livina Sierens",sex: "f",born: 1761,died: 1826,father: "Jan Sierens",mother: "Maria van Waes"},
    {name: "Laurentia Haverbeke",sex: "f",born: 1710,died: 1786,father: "Jan Haverbeke",mother: "Maria de Rycke"},
    {name: "Carel Haverbeke",sex: "m",born: 1796,died: 1837,father: "Pieter Antone Haverbeke",mother: "Livina Sierens"},
    {name: "Elisabeth Hercke",sex: "f",born: 1632,died: 1674,father: "Willem Hercke",mother: "Margriet de Brabander"},
    {name: "Jan Haverbeke",sex: "m",born: 1671,died: 1731,father: "Lieven Haverbeke",mother: "Elisabeth Hercke"},
    {name: "Anna van Hecke",sex: "f",born: 1607,died: 1670,father: "Paschasius van Hecke",mother: "Martijntken Beelaert"},
    {name: "Maria Sturm",sex: "f",born: 1835,died: 1917,father: "Charles Sturm",mother: "Seraphina Spelier"},
    {name: "Jacobus Bernardus van Brussel",sex: "m",born: 1736,died: 1809,father: "Jan van Brussel",mother: "Elisabeth Haverbeke"}];


function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

var byName = {};

data.forEach(function(person) {
    byName[person.name] = person;
});

var differences = data.filter(function(person) {
  return byName[person.mother] != null;
}).map(function(person) {
  return person.born - byName[person.mother].born;
});

console.log(average(differences));


//Задание 12


function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

var byCenturies = {}

function groupBy(arr, func){ 
    var groupObj = {};
    arr.forEach(function(p){
        var id = func(p);
        if ( groupObj[id] === undefined ) {
            groupObj[id] = [];
        }
        groupObj[id].push( p )
    });
    return groupObj;
}

function getCentury(p) {
    return Math.ceil(p.died / 100);
}

var byCenturies = groupBy(data, getCentury);

for ( century in byCenturies ) {
    byCenturies[century] = average( byCenturies[century].map(function(p){ return p.died - p.born }) );
    console.log( century + ": " + byCenturies[century] );
}


//Заданиу 13
function every(arr, func) {
    for (var i = 0; i < arr.length; i++) {
        if ( !func(arr[i]) ) {
            return false
        }
    }
    return true;
};

function some(arr, func) {
    for (var i = 0; i < arr.length; i++) {
        if ( func(arr[i]) ) {
            return true
        }
    }
    return false;
};


console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
console.log(some([NaN, 3, 4], isNaN));
console.log(some([2, 3, 4], isNaN));
