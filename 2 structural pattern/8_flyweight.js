class Car {
    constructor(model, price) {
        this.model = model
        this.price = price
    }
}

class CarFactory {
    constructor() {
        this.cars = []
    }

    create(model, price) {
        const candidate = this.getCar(model)
        if (candidate) {
            return candidate
        }

        const newCar = new Car(model, price)
        this.cars.push(newCar)
        return newCar
    }

    getCar(model) {
        return this.cars.find((car) => car.model === model)
    }
}

const factory = new CarFactory()
const bmw = factory.create('bmw', 100000)
const audi = factory.create('audi', 100000)
const bmw2 = factory.create('bmw', 80000)

console.log(audi)
console.log(bmw2)
