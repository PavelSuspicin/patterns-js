class Employee {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }

  responsibility() {}

  work() {
    return `${this.name} выполняет ${this.responsibility()}`
  }

  getPaid() {
    return `${this.name} имеет ЗП ${this.salary}`
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }

  responsibility() {
    return `процесс создание программ`
  }
}

class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }

  responsibility() {
    return `процесс создание тестирования`
  }
}

const dev = new Developer('Pavel', 100000)
console.log(dev.work())
const tester = new Tester('Elena', 90000)
console.log(tester.work())
