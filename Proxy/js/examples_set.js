// let numbers = [];
//
// numbers = new Proxy(numbers, { // (*)
//     set(target, prop, val) { // для перехвата записи свойства
//
//         if (!(typeof val === 'number')) return false;
//
//         target[prop] = val;
//         return true;
//     }
// });
//
// numbers.push(1); // добавилось успешно
// numbers.push(2); // добавилось успешно
// alert("Длина: " + numbers.length); // 2
//
// numbers.push("тест"); // TypeError (ловушка set на прокси вернула false)
//
// alert("Интерпретатор никогда не доходит до этой строки (из-за ошибки в строке выше)");