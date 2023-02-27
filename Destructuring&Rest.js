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
    discount: 0.1,
    children: {
        name: 'Reactjs',
        price: 200,
        discount: 0.2
    }
}

// var {name, ...newObjects} = course;
var {name: parentName, children: {name: childrenName}} = course;//đặt lại trường name cho cha và con
console.log(name)
console.log(rest)
// console.log(newObjects)//trả về hẳn 1 object mới dựa trên obj cũ nhưng ko có name
console.log(childrenName)
console.log(parentName)




//10: Spread

// function logger({name, price, ...rest}) {//truyền thằng đối tượng logger vào
//     console.log(name)//in ra các thuộc tính
//     console.log(price)
//     console.log(rest)
// }
// logger ({
//     name: 'JavaScript',
//     price: 100,
//     discount: 0.1
// })

function logger([a, b, ...rest]) {
    console.log(a, b)
    console.log(rest)
}

logger([2, 6, 7, 8, 9, 10])