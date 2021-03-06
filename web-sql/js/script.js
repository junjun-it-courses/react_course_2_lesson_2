// Создание базы данных web-sql
const db = openDatabase(
    'mydb',
    '1.0',
    'Test DB',
    2 * 1024 * 1024
);


// Выполнение запросов в базу данных
db.transaction( tx => {
    tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
});


// Добавление данных в web-sql
db.transaction(tx => {
    tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "foobar")');
    tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "logmsg")');
})

// Взятие данных из базы

db.transaction(function (tx) {
    tx.executeSql('SELECT * FROM LOGS', [], function (tx, results) {
        console.log(results)

    }, null);
});