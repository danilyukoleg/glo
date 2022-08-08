"use strict";

const appData = {
  title: "",
  screens: "",
  screenPrice: 0,
  rollback: 40,
  adaptive: true,
  service1: 0,
  service2: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  allServicePrices: 0,

  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "GloAcademy");
    appData.screens = prompt(
      "Какие типы экранов нужно разработать?",
      "Декстоп"
    );

    appData.screenPrice = prompt("Сколько будет стоить данная работа?");

    do {
      appData.screenPrice = prompt("Сколько будет стоить данная работа?");
    } while (!appData.isNumber(appData.screenPrice));

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

  isNumber: function (num) {
    return (
      !isNaN(parseFloat(num)) &&
      isFinite(num) &&
      num.trim() === num &&
      num !== null
    );
  },

  getAllServicePrices: function () {
    let sum = 0;
    let price = 0;

    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        appData.service1 = prompt(
          "Какой дополнительный тип услуги нужен?",
          "Калькулятор"
        );
      } else if (i === 1) {
        appData.service2 = prompt(
          "Какой дополнительный тип услуги нужен?",
          "Маркер"
        );
      }
      sum = prompt("Сколько это будет стоить?");

      while (!appData.isNumber(sum)) {
        sum = prompt("Сколько это будет стоить?");
      }
      price += Number(sum);
    }

    return price;
  },

  getFullPrice: function () {
    return +appData.screenPrice + appData.allServicePrices;
  },

  getTitle: function () {
    return (
      appData.title.trim()[0].toUpperCase() +
      appData.title.trim().substr(1).toLowerCase()
    );
  },

  getServicePercentPrices: function () {
    return appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },

  showTypeof: function (variable) {
    return console.log(variable, typeof variable);
  },

  getRollbackMessage: function (price) {
    if (price >= 30000) {
      return "Даем скидку в 10%";
    } else if (price >= 15000 && price < 30000) {
      return "Даем скидку в 5%";
    } else if (price >= 0 && price < 15000) {
      return "Скидка не предусмотрена";
    } else {
      return "Что то пошло не так";
    }
  },

  logger: function () {
    for (let key in appData) {
      console.log(`Свойства: ${key}
    Методы: ${appData[key]}`);
    }
  },

  start: function () {
    appData.asking();
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.servicePercentPrice = appData.getServicePercentPrices();
    appData.title = appData.getTitle();
    appData.logger();
  },
};

appData.start();
