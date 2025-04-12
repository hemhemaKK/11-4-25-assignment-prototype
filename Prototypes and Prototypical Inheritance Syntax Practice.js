function Animal(type){
    this.type = type
}

//prototypical on Animal constructor and created a new methd called sound
Animal.prototype.sound = function(sound){
    this.sound = sound
    return `${this.type} ${this.sound}`
}

function Dog(type,sound){
    Animal.call(this,type)
    this.sound
}

//prototypical on Dog constructor and created a new methd called myDog
Dog.prototype.myDog = function(sound){
    this.sound = sound
    return `${this.type} is ${this.sound}.`
}

//creating constructor
let animal1 = new Animal("Animal")
let animal2 = new Dog("Dog")

//printing the person and employee constructor 
console.log(animal1.sound("sound"))
console.log(animal2.myDog("Bark"))