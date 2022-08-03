"use strict";

let title = prompt("Как называется ваш проект?", "Типы данных");
let screens = prompt("Какие типы экранов нужно разработать?", "Декстоп");
let screenPrice = +prompt("Сколько будет стоить данная работа?", "20000");
let rollback = 33;
let adaptive = confirm("Нужен ли адаптив на сайте?");

let service1 = prompt("Какой дополнительный тип услуги нужен?", "Форма");
let servicePrice1 = +prompt("Сколько это будет стоить?", "2000");
let service2 = prompt("Какой дополнительный тип услуги нужен?", "Клик");
let servicePrice2 = +prompt("Сколько это будет стоить?", "50000");

let fullPrice = screenPrice + servicePrice1 + servicePrice2;

let servicePercentPrice = Math.ceil(fullPrice - rollback / 100);

if (fullPrice >= 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice >= 15000 && fullPrice < 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice >= 0 && fullPrice < 15000) {
  console.log("Скидка не предусмотрена");
} else {
  console.log("Что то пошло не так");
}

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(
  `Стоимость верстки экранов ${screenPrice}  рублей/ долларов/гривен/юани`
);
console.log(
  `Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани`
);
console.log(screens.toLowerCase().split(", "));
console.log(servicePercentPrice);
