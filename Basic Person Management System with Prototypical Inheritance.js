function Person(name, age){
    this.name = name
    this.age = age
}
//prototypical on Person constructor and created a new methd called introduce
Person.prototype.introduce = function(name,ge){
    return `Hi, my name is ${this.name} and I am ${this.age} years old`
}

function Employee(name, age, jobTitle){
    //inheriting the properties from Person constructor
    Person.call(this,name,age)
    this.jobTitle = jobTitle
}
//prototypical on Employee constructor and created a new methd called work
Employee.prototype.work = function(){
    return `${this.name} is working as a ${this.jobTitle}.`
}
//creating constructor
let person = new Person("Hema",23)
let employee = new Employee("Sanjay",24,"Software Developer")
//printing the person and employee constructor 
console.log(person.introduce()) 
console.log(employee.work())