//Spread
//toán tử ... là spread dùng để nối mảng và object


var array1 = ['Javascript', 'Ruby', 'PHP']

var array2 = ['Reactjs', 'Nodejs']

var array3 = [...array2, ...array1]//array2 + array1
//['Reactjs', 'Nodejs', 'Javascript', 'Ruby', 'PHP']
console.log(array3)
//['Reactjs', 'Nodejs', 'Javascript', 'Ruby', 'PHP']



var object1 = {
    name: 'Nguyễn Văn',
} 
var object2 = {
    price: 1000
}
var object3 = {
   ...object1,
   ...object2
}
console.log(object3)
//{name: 'Nguyễn Văn', price: 1000}