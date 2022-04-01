// При импорте функция которая была импортирована будет записана в переменную
// Внутри модулей всегда работает режим use strict
// Внутри модуля this - не определен так как в них по умолчанию работает use strict

import {sayHi, printUsers} from './module.js';

// путь обязательно должен содержать расширение файла и быть правильным
import {settings, colors} from "./utils.js";


sayHi('John'); // Hello, John!

printUsers();


console.log(settings, colors)