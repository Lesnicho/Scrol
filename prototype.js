const car = {
    wheels: 4,

    init(){
        console.log(`У моей машины есть ${this.wheels} колеса, мой владелец ${this.owner} `)
    }
}

const carWithOwner = Object.create(car, {
    owner:{
        value: `Диментрий`
    }
})

carWithOwner.init()

//[][][][][][][][][[][][][][][][][[]]]
