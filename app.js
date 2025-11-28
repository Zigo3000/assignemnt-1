//1 
let x = "123";
console.log(Number(x)) 
let y = 7;
let z =Number(x) + (y);
console.log(z)

//2
function checkFalsy(value){
    if (!value) {
        return "invalid";
    }
return value

}
console.log(checkFalsy(0))

//3 
for(let i=0;i<11;i++){
   if(i%2 === 0){
continue
   }
    console.log(i);

}

//4
const numbers=[1,2,3,4,5]

const evenNumbers=
numbers.filter(function(num){
return num %2 === 0
});
console.log(evenNumbers)

//5
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

//6
let day = 2;
switch(day){
case 1:
console.log("Sunday");
break;

case 2:
    console.log("Monday");
    break;

case 3:
    console.log("Tuesday")
    break;

case 4:
    console.log("Wednesday")
    break;
    
 case 5:
    console.log("Thursday")
    break;

case 6:
    console.log("Friday")    
    break;

case 7:
    console.log("Saturday")
    break;
}

//7
const strings=["a","ab","abc"]

const lengths = strings.map(function(str){
    return str.length
});

console.log(lengths)

//8
function isDivisibleBy3And5(num) {
  return num % 3 === 0 && num % 5 === 0;
}
console.log(isDivisibleBy3And5(15)); 

//9
const square = n=>n*n;
console.log(square(5));

//10
const Person = {name:"John" , age: 25}

console.log (Person)

//11
function sumNumbers(a,b,c,d,e){

    return a+b+c+d+e
}
console.log(sumNumbers(1,2,3,4,5))

//12
function waitForsSuccess(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Success");
        },3000);
    });
}
waitForsSuccess().then((message)=>
    console.log(message));
    
//13
function findLargestNumber(arr) {
  let largest = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  
  return largest;
}

console.log(findLargestNumber([1, 3, 7, 2, 4])); 

//14
function getObjectKeys(obj){
    return Object.keys(obj);
}
const person= {name:"John",age:30}

console.log(getObjectKeys(person));

//15

function splitIntoWords(str) {
  return str.split(" ");
}

console.log(splitIntoWords("The quick brown fox"));


//part 2 essay questions

//1
//forEach:A method available on arrays,Executes a provided callback function once per element.
//forof:A loop construct that iterates over iterable objects (arrays, strings, maps, sets)

//2
//Hoisting is JavaScript’s default behavior of moving variable and function declarations to the top of their scope before code execution.

//This means you can technically use certain variables or functions before they are declared.

sayHello();  

function sayHello() {
  console.log("Hello!");
}

//Temporal Dead Zone : The TDZ is the period between entering a scope and the moment a let or const variable is initialized.

//During this time The variable exists but you cannot access it doing so causes a ReferenceError

//3
//== (Loose Equality)

//Compares values only.

//Performs type coercion if the types are different.

//Tries to convert the operands to the same type before comparing.

//=== (Strict Equality)

//Compares value AND type.

//No type coercion.

//More predictable and safer.

//4
//A try–catch block lets you run code that might throw an error without crashing the entire program,Errors inside async code don’t get caught by normal try–catch

//With callbacks or async operations like setTimeout, errors do not bubble into the surrounding try–catch,
//Why try–catch is important in async programming
// Prevents unhandled promise rejections

//Without try–catch (or .catch()), async errors can crash the program.

//Keeps async flows predictable

//You can handle errors in one place instead of scattering .catch() handlers everywhere.

//Makes code cleaner with async/await

//5
//Type Conversion : Type conversion is when you manually convert a value from one type to another on purpose using functions or methods.
//example :
let t = "123";
let num = Number(t); 
console.log(num);  

//Type Coercion:Type coercion is when JavaScript automatically converts a value from one type to another behind the scenes, usually during comparisons or operations.
//example: 
var n = 5 + "5";
console.log(n)
