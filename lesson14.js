// Задача №1 
// Превратите объект в JSON 
// Превратите объект leader из примера ниже в JSON: 

// var leader = { 
// name: "Василий Иванович", 
// age: 35 
// }; 

// var lead = JSON.stringify(leader);
// console.log (lead);
// console.log (JSON.parse(lead));

// Задача №2
// Полиморфная функция formatDate 
// Напишите функцию formatDate(date), которая возвращает дату в формате dd.mm.yy. 
// Ее первый аргумент должен содержать дату в одном из видов: 
// Как объект Date. 
// Как строку, например yyyy-mm-dd или другую в стандартном формате даты. 
// Как число секунд с 01.01.1970. 
// Как массив [гггг, мм, дд], месяц начинается с нуля 
// Для этого вам понадобится определить тип данных аргумента и, 
// при необходимости, преобразовать входные данные в нужный формат. 
// Пример работы: 
function formatDate(date) {
    if (typeof date == "string"){
        var arr = date.split("-");
        return arr[2] + "." + arr[1] + "." + arr[0].slice(2);
    } else if(typeof date == "number") {
        var result = new Date(date*1000);

        var resDate = result.getDate();
        if (resDate < 10) resDate = "0" + resDate;
        var month = result.getMonth() + 1;
        if (month < 10) month = "0" + month;
        return resDate + "." + month + "." + String(result.getFullYear()).slice(2);
    } else if(Array.isArray(date)){
        date[1] = date[1] + 1;
        if (date[1] < 10) date[1] = "0" + date[1];
        if (date[2] < 10) date[2] = "0" + date[2];
        return date[2] + "." + date[1] + "." + String(date[0]).slice(2);
    } else {
        var resDate = date.getDate();
        if (resDate < 10) resDate = "0" + resDate;
        var month = date.getMonth() + 1;
        if (month < 10) month = "0" + month;
        return resDate + "." + month + "." + String(date.getFullYear()).slice(2);
    }
} 

console.log( formatDate('2011-10-02') ); // 02.10.11 
console.log( formatDate(1234567890) ); // 14.02.09 
console.log( formatDate([2014, 0, 1]) ); // 01.01.14 
console.log( formatDate(new Date(2014, 0, 1)) ); // 01.01.14


