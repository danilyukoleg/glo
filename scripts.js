"use strict";
let title = prompt("Как называется ваш проект?", "GloAcademy");
let screens = prompt("Какие типы экранов нужно разработать?", "Декстоп");
let screenPrice = +prompt("Сколько будет стоить данная работа?", "20000");
let rollback = 40;
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?", "Калькулятор");
let servicePrice1 = +prompt("Сколько это будет стоить?", "4000");
let service2 = prompt("Какой дополнительный тип услуги нужен?", "Маркер");
let servicePrice2 = +prompt("Сколько это будет стоить?", "2000");

let fullPrice;
let servicePercentPrice;
let allServicePrices;

const getAllServicePrices = function () {
  return servicePrice1 + servicePrice2;
};

const getFullPrice = function () {
  return screenPrice + allServicePrices;
};

const getTitle = function () {
  return title[0].trim().toUpperCase();
};

const getServicePercentPrices = function () {
  return fullPrice - fullPrice * (rollback / 100);
};

const showTypeof = function (variable) {
  return console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (price >= 15000 || price < 30000) {
    return "Даем скидку в 5%";
  } else if (price >= 0 || price < 15000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что то пошло не так";
  }
};

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();

showTypeof(title);
showTypeof(adaptive);
showTypeof(fullPrice);

console.log(screens.length);
console.log(
  `Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани 
  Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани`
);
console.log(screens.toLowerCase().split(", "));
console.log(getRollbackMessage(fullPrice));
console.log(Math.ceil(servicePercentPrice));
