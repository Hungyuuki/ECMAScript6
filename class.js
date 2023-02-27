class Course{
    constructor(name, price) {
    this.name = name;
    this.price = price;
    }
    toString() {
        return `Course: ${this.name} Price: ${this.price}`
    }
    getName() { return this.name; }
}

const phpCourses = new Course('php', 1000)
console.log(phpCourses)
console.log(phpCourses.toString())
console.log(phpCourses.getName())