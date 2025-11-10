//function outer(a){
  //return function inner(b){
    //return a+b
  //};
//};
//const add=outer(15);
//console.log(add(4));
 

//function outer(x){
  //function inner(y){
    //return x+y
  //}

//}


//let name = "pavan";
//function greet (){
  //console.log("hello" + name);
//}
//greet();
//console.log(name)



// Hoisting -- is process when we access
// before initilization 

//Var can hoisted

// console.log(a);
// var a ;

// Let is not hoisted
// console.log(a);
// let a ;

// const is not hoisted 
// console.log(a);
// const a =10 ;

// function is also hoisted

// sum();

// function sum(){
//     let a = 10 ;
//     let b = 20 ;
//     let result = a+b;
//     console.log(result);
// }

// sum();
// const sum =()=>{
//     let a = 10 ;
//     let b = 30 ;
//     let result = a+b;
//     console.log(result);
// }


// Closure --
// When inner function able to access the propery 
// of outer function that is known as closure

// function outer(){
//     let a = 20 ;
//     function inner(){
//         let b = 10;
//         let result = a+b;
//         console.log(result);
        
//     }
//     inner();
    
// }
// outer();


// This keyWord
// const obj ={
//     name :"Alice",
//     details(){
//         console.log(Hi my name is ${this.name});
//     }
// }
// obj.details();
// console.log(obj.name);

// Call apply bind

// Call -- Invoke function with this and arguments 
// function_Name.call(thisArg,arg1,arg2....);

// Apply -- Like call , it takes the argument as an array;
// function_Name.apply(thisArg,[arg1,arg2,arg3....]);

// Bind --- return new function with bound this
// function_Name.bind(thisArg);


// function greet(greeting){
//     console.log(${greeting},I'm ${this.name});
// }

// const person ={
//     name:"Alice"
// }

// greet.call(person,"Hello"); // Hello ,I'm Alice
// greet.apply(person,["Hi"]);//Hi ,I'm Alice
// const bindGreet = greet.bind(person);
// bindGreet("Hey");



// Destructuring
// 1. Object Destructuring
// const user = {
//     name : "Alice",
//     age :24,
//     email :"alice@gmail.com",
// }
// // Go with destructuring
// const {name,email,age} = user;
// console.log(name);
// console.log(age);
// console.log(email);

//Array Destructuring

// const num =[10,20,30];
// const [a,b,c]  = num;
// console.log(a);
// console.log(b);
// console.log(c);


// Spread and Rest Operator

// const arr1 = [1,2,3];
// // const arr2 = [4,5,6,7];
// // Spread Operator ...
// const arr2= [...arr1,4,5,6];
// console.log(arr2);

// const obj = {
//     a : 1,
// }
// const anObj ={
//     ...obj,
//     b:2,
//     c:3,
//     d:4,
// }
// console.log(anObj);

// const obj ={
//     name : "Alice",
//     age:23,
//     email :"alice@123",
// }
// const {name,...anDetail} = obj;
// console.log(name) ; "Alice"
// console.log(anDetail);//{age:23,email:"alice@123"};

// function greet(firstname,...others){
//     console.log(Hello,${firstname});
//     console.log('Other names',others);
// }
// greet("Alice","Bob","John","Doe");

// spread
// {name:"Alice",age:23} == name = Alice    age  = 23

// Rest operator 

// "Alice","Bob","John" ---- ["Alice","Bob","John"]




















































