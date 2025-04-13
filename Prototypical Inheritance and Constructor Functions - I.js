//Creating a constructor function for Car that takes the following parameters
function Car(make,model,year,basePrice){
    this.make = make;
    this.model = model;
    this.year = year;
    this.isAvailable = true;
    this.basePrice = basePrice;
}

//Creating a constructor function for Customer that takes the following parameters
function Customer(name){
    this.name = name;
    this.rentCars = [];
}
//prototypical on Customer constructor and created a new methd called rentCar
Customer.prototype.rentCar = function(Car){
    if(Car.isAvailable){
        Car.isAvailable = false
        this.rentCars.push(Car)
     console.log("-----------------------------------------------------")
    console.log(`${this.name} has rented a ${Car.make} ${Car.model}`) 
    }
    else{
     console.log("-----------------------------------------------------")
     console.log(`${Car.make} is already rented`)
    }
}

//Creating a constructor function for PermiumCustomer that takes the following parameters
function PremiumCustomer(name,discountRate){
    Customer.call(this,name)
    this.discountRate = discountRate
}

//creating a prototype chaining for PremiumCustomer and Customer
PremiumCustomer.prototype = Object.create(Customer.prototype);
PremiumCustomer.prototype.constructor = PremiumCustomer;

//prototypical on PremiumCustomer constructor and created a new methd called getDiscountedPrice
PremiumCustomer.prototype.getDiscountedPrice = function(price) {
    return price/100 * 20;
};


//prototypical on Customer constructor and created a new methd called calculateRentalPrice
Customer.prototype.calculateRentalPrice = function(Car, days) {
    const price = Car.basePrice * days;
    return price;
};

//prototypical on Customer constructor and created a new methd called returnCar
Customer.prototype.returnCar = function(Car) {
    const index = this.rentCars.indexOf(Car);
    if (index !== -1) {
        Car.isAvailable = true;
        this.rentCars.splice(index, 1);
        console.log("-----------------------------------------------------")
        console.log(`${this.name} has returned the ${Car.make} ${Car.model}.`);
    } else {
        console.log("-----------------------------------------------------")
        console.log(`This car was not rented by ${this.name}.`);
    }
};


//Creating a constructor function for Maintenance that takes the following parameters
function Maintenance(Car, delay) {
    console.log("-----------------------------------------------------")
    console.log(`Performing maintenance on ${Car.make} ${Car.model}...`);
    setTimeout(() => {
        Car.isAvailable = true;
        console.log(`${Car.make} ${Car.model} is now available for rent.`);
    }, delay);
}

//calling the custructore for Car as car1 and car2
const car1 = new Car("Toyota", "Corolla", 2020, 70);
const car2 = new Car("Honda", "Civic", 2022, 40);

//calling Customer and premiumCustomer costructor 
const customer1 = new Customer("John");
const premiumCustomer1 = new PremiumCustomer("Jane");

//function call on customer1 and premiumCustomer constructors of method rentCar 
customer1.rentCar(car1);
premiumCustomer1.rentCar(car2);

const rentalDays = 5; //rental for 5 days initializing
const price1 = customer1.calculateRentalPrice(car1, rentalDays); //calling calculateRentalPrice method with car1 and rentadays parameter
const price2 = premiumCustomer1.calculateRentalPrice(car2, rentalDays);//calling calculateRentalPrice method with car2 and rentadays parameter
console.log("-----------------------------------------------------")
console.log("------Logging the totale rent of customer and premiumCustomer--------")
console.log("-----------------------------------------------------")
console.log(`Total rental price for ${customer1.name}: $${price1}`);
console.log(`Total rental price for ${premiumCustomer1.name}: $${price2}`);

customer1.returnCar(car1);
Maintenance(car2, 2000);