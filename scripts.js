"use strict";

let title = prompt("Введите название Вашего проекта...");
let screens = prompt("Введите типы экранов для разработки");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let rollback = 50;
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");

let allServicePrices;
let fullPrice;
let servicePercentPrice;

// 1
const getAllServicePrices = function (price1, price2) {
  return price1 + price2;
};

// 2
function getFullPrice(screenPrice, allServicePrices) {
  return screenPrice + allServicePrices;
}

// 3
const getTitle = (title) => {
  return title[0].toUpperCase() + title.slice(1).toLowerCase();
};

// 4
const getServicePercentPrices = (fullPrice, rollback) => {
  return fullPrice - rollback;
};

const getRollbackMessage = (price) => {
  if (price >= 30000) {
    return "Скидка 10%";
  } else if (price >= 15000) {
    return "Скидка 5%";
  } else if (price >= 0) {
    return "Скидка не предусмотрена";
  } else {
    return "Что то пошло не так";
  }
};

const showTypeOf = (variable) => {
  console.log(variable, typeof variable);
};

// 5
showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

getAllServicePrices(servicePrice1, servicePrice2);
getFullPrice(screenPrice, allServicePrices);
getServicePercentPrices(fullPrice, rollback);

console.log(getTitle(title));
console.log("screens: ", screens);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);
