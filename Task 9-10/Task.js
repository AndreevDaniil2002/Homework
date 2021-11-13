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