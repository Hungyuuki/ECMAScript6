// Enhanced Obj Literals
/**
 * 1. Định nghĩa key: value cho obj.
 * 2. Định nghĩa method cho obj
 * 3. Định nghĩa key cho obj dưới dạng biến
 */

var name = 'JavaScript';
var price = 1200;
var course = { //khi key value trùng tên nhau thì có thể viết như thế này (1)
    name, 
    price,
    getName() {
        return name;//Tự hiểu getname là 1 method(2)
    }
}
console.log(course);



var fieldName = 'Name';//Định nghĩa ra 2 biến
var fieldValue = 'price';
const course2 = {
    [fieldName]: 'Javascript',//Đưa 2 biến này vào đối tượng(3)
    [fieldValue]: 1200
}
console.log(course2)