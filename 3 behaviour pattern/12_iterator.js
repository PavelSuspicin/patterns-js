class MyIterator {
    constructor(data) {
        this.index = 0
        this.data = data
    }
    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.index < this.data.length) {
                    return {
                        value: this.data[this.index++],
                        done: false,
                    }
                } else {
                    this.index = 0
                    return {
                        value: void 0,
                        done: true,
                    }
                }
            },
        }
    }
}

function* generator(arr) {
    let index = 0
    while (index < arr.length) {
        yield arr[index++]
    }
}

const iterator = new MyIterator(['This', 'is', 'iterator'])
const gen = generator(['This', 'is', 'iterator'])

for (const val of gen) {
    console.log('value:', val)
}

// for (const val of iterator) {
//     console.log('Value:', val)
// }
