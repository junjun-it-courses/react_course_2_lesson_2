// Cделаем числовой массив, так чтобы при чтении из него
// несуществующего элемента возвращался 0.

// let numbers = [0, 1, 2];
//
// numbers = new Proxy(numbers, {
//     get(target, prop) {
//         if (prop in target) {
//             return target[prop];
//         } else {
//             return 0; // значение по умолчанию
//         }
//     }
// });
//
// console.log( numbers[1] ); // 1
// console.log( numbers[123] ); // 0 (нет такого элемента)


// Представим, что у нас есть объект-словарь с фразами на английском
// и их переводом на испанский:

// let dictionary = {
//     'Hello': 'Hola',
//     'Bye': 'Adiós'
// };
//
// alert( dictionary['Hello'] ); // Hola
// alert( dictionary['Welcome'] ); // undefined

// Лучше оставлять фразы непереведенными чем использовать undefined
// Для того чтобы это реализовать будем юзать прокси

//
// let dictionary = {
//     'Hello': 'Hola',
//     'Bye': 'Adiós'
// };

// Лучший подход это переопределить переменную
// dictionary = new Proxy(dictionary, {
//     get(target, phrase) { // перехватываем чтение свойства в dictionary
//         if (phrase in target) { // если перевод для фразы есть в словаре
//             return target[phrase]; // возвращаем его
//         } else {
//             // иначе возвращаем непереведённую фразу
//             return phrase;
//         }
//     }
// });
//
// // Запросим перевод произвольного выражения в словаре!
// // В худшем случае оно не будет переведено
// alert( dictionary['Hello'] ); // Hola
// alert( dictionary['Welcome to Proxy']); // Welcome to Proxy (нет перевода)
