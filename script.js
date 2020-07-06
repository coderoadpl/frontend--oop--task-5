const sayHello = function(){
    console.log(this)
    const sentence = 'Hello ' + this.firstName + ' ' + this.lastName + '!'
    console.log(sentence)
    return sentence
}

sayHello()

const me = {
    firstName: 'Mateusz',
    lastName: 'Choma',
    sayHello: sayHello,
}

me.sayHello()

const person1 = {
    firstName: 'Ala',
    lastName: 'Kotowicz',
}

sayHello.call(person1)
sayHello.apply(person1)

// apply and call do not change function only call it!
sayHello()

const sayHelloBound = sayHello.bind(person1)

// bind also do not change original function
sayHello()

// bounded function can't change context from now
sayHelloBound()

const person2 = {
    firstName: 'Ola',
    lastName: 'Kotowiczówna',
}

sayHelloBound.call(person2)
sayHelloBound.apply(person2)