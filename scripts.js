"use strict";

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  rollback: 40,
  adaptive: true,
  services: {},
  fullPrice: 0,
  servicePercentPrice: 0,
  allServicePrices: 0,

  start: function () {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();
    appData.logger();
  },

  asking: function () {
    do {
      appData.title = prompt("Как называется ваш проект?", "GloAcademy");
    } while (appData.isNumber(appData.title));

    for (let i = 0; i < 2; i++) {
      let name;
      let price = 0;

      do {
        name = prompt("Какие типы экранов нужно разработать?", "Декстоп");
      } while (appData.isNumber(name));

      do {
        price = prompt("Сколько будет стоить данная работа?");
      } while (!appData.isNumber(price));

      appData.screens.push({ id: i, name: name, price: price });
    }

    for (let i = 0; i < 2; i++) {
      let name;
      let price = 0;

      do {
        name = prompt("Какой дополнительный тип услуги нужен?", "Калькулятор");
      } while (appData.isNumber(name));

      do {
        price = prompt("Сколько это будет стоить?");
      } while (!appData.isNumber(price));

      appData.services[name + i] = +price;
    }

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

  addPrices: function () {
    appData.screenPrice += appData.screens.reduce(function (sum, elem) {
      return Number(sum.price) + Number(elem.price);
    });

    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },
  isNumber: function (num) {
    return (
      !isNaN(parseFloat(num)) &&
      isFinite(num) &&
      num.trim() === num &&
      num !== null
    );
  },

  getFullPrice: function () {
    appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
  },

  getTitle: function () {
    appData.title =
      appData.title.trim()[0].toUpperCase() +
      appData.title.trim().substr(1).toLowerCase();
  },

  getServicePercentPrices: function () {
    appData.servicePercentPrice =
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
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
      if (typeof appData[key] === "function") {
        console.log("key: ", key);
      } else {
        console.log("key: ", key);
      }
    }
  },
};

appData.start();
