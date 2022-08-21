"use strict";

const title = document.getElementsByTagName("h1")[0];
const start = document.getElementsByClassName("handler_btn")[0];
const reset = document.getElementsByClassName("handler_btn")[1];
const btnPlus = document.querySelector(".screen-btn");
const otherItemsPercent = document.querySelectorAll(".other-items.percent");
const otherItemsNumber = document.querySelectorAll(".other-items.number");
const rollback = document.querySelector(".rollback  input[type=range]");
const spanText = document.querySelector(".rollback span.range-value");

const totalInput1 = document.getElementsByClassName("total-input")[0];
const totalInput2 = document.getElementsByClassName("total-input")[1];
const totalInput3 = document.getElementsByClassName("total-input")[2];
const totalInput4 = document.getElementsByClassName("total-input")[3];
const totalInput5 = document.getElementsByClassName("total-input")[4];

let screens = document.querySelectorAll(".screen");

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  rollback: 0,
  adaptive: true,
  servicesPercent: {},
  servicesNumber: {},
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  allServicePrices: 0,
  countScreens: 0,

  init: function () {
    appData.addTitle();
    appData.getRollback();
    start.addEventListener("click", appData.start);
    btnPlus.addEventListener("click", appData.addScreensBlock);
    rollback.addEventListener("input", appData.getRollback);
    console.log(appData.count);
  },
  startDisabled: function () {},
  addTitle: function () {
    document.title = title.textContent;
  },
  start: function () {
    screens = document.querySelectorAll(".screen");
    let flag = true;

    screens.forEach(function (item) {
      if (
        item.querySelector("input").value === "" ||
        item.querySelector("select").selectedOptions === 0
      ) {
        flag = false;
      }
    });

    if (flag) {
      appData.addScreens();
      appData.addServices();
      appData.addPrices();
      appData.showResult();
    }
  },
  getRollback: function () {
    appData.rollback = spanText.textContent = rollback.value + "%";
  },
  showResult: function () {
    totalInput1.value = appData.screenPrice;
    totalInput2.value = appData.countScreens;
    totalInput3.value =
      appData.servicePricesPercent + appData.servicePricesNumber;
    totalInput4.value = appData.fullPrice;
    totalInput5.value = appData.servicePercentPrice;
  },
  addScreens: function () {
    screens = document.querySelectorAll(".screen");
    screens.forEach(function (screen, index) {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;

      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        count: +input.value,
      });
    });
  },
  addServices: function () {
    otherItemsPercent.forEach(function (item) {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    });

    otherItemsNumber.forEach(function (item) {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });
  },

  addScreensBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);
  },

  addPrices: function () {
    // appData.screenPrice += appData.screens.reduce(function (sum, elem) {
    //   return sum.price + elem.price;
    // });

    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
      appData.countScreens += +screen.count;
    }

    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key];
    }

    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent +=
        appData.screenPrice * (appData.servicesPercent[key] / 100);
    }

    appData.fullPrice =
      +appData.screenPrice +
      appData.servicePricesNumber +
      appData.servicePricesPercent;

    appData.servicePercentPrice =
      appData.fullPrice -
      appData.fullPrice * (parseInt(appData.rollback) / 100);
  },

  showTypeof: function (variable) {
    return console.log(variable, typeof variable);
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

appData.init();
