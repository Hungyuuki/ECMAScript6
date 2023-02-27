// 7. Destructuring(phân rã)


var array = ['JavaScript' , 'Java', 'PHP']
//bình thường sẽ dùng 
var a = array[0];
var b = array[1];
var c = array[2];
console.log(a, b, c);
//Nhưng khi dùng destructuring thì sẽ ngắn gọn như sau
var [a, b, c] = array;
console.log(a, b, c);




// 8. Rest parameters: lấy ra những phần còn lại
var array = ['JavaScript' , 'Java', 'PHP']
var [a, ...rest] = array; //Lấy ra phần tử đầu tiên và giữ nguyên những ptu còn lại
console.log(a);
console.log(rest);



var course = {
    name: 'JavaScript',
    price: 100,
    discount: 0.1
}

var {name, price,...rest} = course;
console.log(name, price, rest)
