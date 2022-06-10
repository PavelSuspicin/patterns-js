const car = {
    wheels: 4,
    init() {
        console.log(`У меня ${this.wheels} колеса , мой владелец ${this.owner}. `)
    },
}

const carWithOwner = Object.create(car, {
    owner: {
        value: 'Pavel',
    },
})

carWithOwner.init()
console.log(carWithOwner)
