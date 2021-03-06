import Vehicle  from "./vehicleBaseClass";

class newCar extends Vehicle {
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maximumPassengers = 6;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 200; 
        this.fuel = 100;
        this.scheduleService = 'false'; 
    }
    loadPassenger(num){
        if(this.passenger < this.maximumPassengers){
        if((num + this.passenger) <= this.maximumPassengers){
            this.passenger = num;
            return this.passenger;
        }
    }
    else {
        console.log(this.model + " " + this.make + "No Room left")
    }}
    start(){
        if(this.fuel > 0){
            console.log("It starts");
        }
        else{
            return this.started = false;
            console.log("No Fuel")
        }
    }
    scheduleService(mileage){
        if(this.mileage > 30000){
            this.scheduleService == true;
            console.log("Schedule Service Maintence")
        }
        else{
            console.log("No Maintence Required")
        }
    }
    
}
//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)