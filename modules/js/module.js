// Внутри модулей всегда работает режим use strict

export function sayHi(user) {
    alert(`Hello, ${user}!`);
}

export function printUsers() {
    const users = ['Vlad', 'Helen', 'Julia', 'Sergey'];
    for(let i = 0; i < users.length; i++) {
        console.log(users[i])
    }
}

// Если код выполняется в модуле, то неважно сколько раз вы будете импортировать
// этот модуль в другой, в он выполнится только 1 раз любом случае
alert('module.js connected')