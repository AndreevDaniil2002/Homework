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
console.log(arrays.reduce((flat,current)=> flat.concat(current), []));


//Задание 11


var ancestry = JSON.parse(ANCESTRY_FILE);

function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

var byName = {};

ancestry.forEach(function(person) {
    byName[person.name] = person;
});

var differences = ancestry.filter(function(person) {
  return byName[person.mother] != null;
}).map(function(person) {
  return person.born - byName[person.mother].born;
});

console.log(average(differences ));


//Задание 12

var ancestry = JSON.parse(ANCESTRY_FILE);


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

var byCenturies = groupBy( ancestry, getCentury );

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
