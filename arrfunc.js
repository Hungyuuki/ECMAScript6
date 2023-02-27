const logger = log => console.log(log);
logger('debug')

const obj = (a, b) => ({a: b, b: a});
console.log(obj(5, 10))

//Ngoài ra thì hàm mũi tên ko thể được dùng để làm hàm constructor
//ngoài ra thì chỉ dùng cho expressed function, ko dùng cho declared function.