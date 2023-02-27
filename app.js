/**
 * let/const
 * 1. var/let, const: scope, hoisting(*)
 * 2. const/var, let: assigment(**)
 * 
 * Code block: if else, loop, {}, ...
 * var: ra ngoài block vẫn truy cập được, let và const ra ngoài ko truy cập được
 * hoisting: đưa biến khai báo lên trên, rồi gán sau
 * VD: 
 * var a;
 * a = 1
 */



//(*)
// a = 1;

// let a 
// console.log(a)


//(**)
// let a = 1;
// a = 100;
// console.log(a)

// const a = 1;
// a = 100;
// console.log(a) 
// error vì const ko gán lại được


