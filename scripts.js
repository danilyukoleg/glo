"use strict";
let title;
let screens;
let screenPrice;
let rollback = 40;
let adaptive;
let service1;
let service2;
let fullPrice;
let servicePercentPrice;
let allServicePrices;

const isNumber = function (num) {
  return (
    !isNaN(parseFloat(num)) &&
    isFinite(num) &&
    num.trim() === num &&
    num !== null
  );
};

const asking = function () {
  title = prompt("Как называется ваш проект?", "GloAcademy");
  screens = prompt("Какие типы экранов нужно разработать?", "Декстоп");

  screenPrice = prompt("Сколько будет стоить данная работа?");

  do {
    screenPrice = prompt("Сколько будет стоить данная работа?");
  } while (!isNumber(screenPrice));

  adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt(
        "Какой дополнительный тип услуги нужен?",
        "Калькулятор"
      );
    } else if (i === 1) {
      service2 = prompt("Какой дополнительный тип услуги нужен?", "Маркер");
    }
    sum = prompt("Сколько это будет стоить?");

    while (!isNumber(sum)) {
      sum = prompt("Сколько это будет стоить?");
    }
  }

  return +sum;
};

const getFullPrice = function () {
  return +screenPrice + allServicePrices;
};

const getTitle = function () {
  return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase();
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
  } else if (price >= 15000 && price < 30000) {
    return "Даем скидку в 5%";
  } else if (price >= 0 && price < 15000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что то пошло не так";
  }
};
asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeof(title);
showTypeof(adaptive);
showTypeof(fullPrice);

console.log("allServicePrices", allServicePrices);

console.log(screens.length);
console.log(
  `Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани 
  Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани`
);
console.log(screens.toLowerCase().split(", "));
console.log(getRollbackMessage(fullPrice));
console.log(Math.ceil(servicePercentPrice));
