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
    this.addTitle();
    this.getRollback();
    start.addEventListener("click", this.start);
    reset.addEventListener('click', this.reset);
    btnPlus.addEventListener("click", this.addScreensBlock);
    reset.addEventListener('click', this.reset);
    rollback.addEventListener("input", this.getRollback);
  },
  addTitle: function () {
    document.title = title.textContent;
  },
  start: function () {
    screens = document.querySelectorAll(".screen");
    let flag = true;
    screens.forEach( (item) => {
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
      appData.block();
    }

  },

  block: function () {
    btnPlus.disabled = true;
    screens = document.querySelectorAll(".screen");
    screens.forEach((item) => {
      const select = item.querySelector('select');
      const input = item.querySelector('input');
      select.disabled = true;
      input.disabled = true;
    });

    otherItemsPercent.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      check.disabled = true;
    });

    otherItemsNumber.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      check.disabled = true;
    });

  rollback.disabled = true;
    start.style.display = 'none';
    reset.style.display = 'block';


  },
  reset: function () {
    appData.screenPrice = 0;
    appData.rollback = 0;
    appData.servicePricesPercent = 0;
    appData.servicePriceNumber = 0;
    appData.fullPrice = 0;
    appData.servicePercentPrice = 0;
    appData.servicePrice = 0;
    appData.serviceWithRollback = 0;
    appData.countScreens = 0;
    totalInput1.value = 0;
    totalInput2.value = 0;
    totalInput3.value = 0;
    totalInput4.value = 0;
    totalInput5.value = 0;

    otherItemsPercent.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      check.checked = false;
      check.disabled = false;
    });

    otherItemsNumber.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      check.checked = false;
      check.disabled = false;
    });

    btnPlus.disabled = false;

    screens = document.querySelectorAll(".screen");
    screens.forEach((item) => {
      const select = item.querySelector('select');
      const input = item.querySelector('input');
      select.value = '';
      input.value = '';
      select.disabled = false;
      input.disabled = false;
    });

    appData.screens.splice(0, appData.screens.length);

    for(let i = 0; i < screens.length - 1; i++) {
      screens[i].remove();
    }

    rollback.disabled = false;
    rollback.value = 0;
    spanText.textContent = 0 + '%';
    start.style.display = 'block';
    reset.style.display = 'none';
    appData.start();

  },



  getRollback: function () {
    appData.rollback = spanText.textContent = rollback.value + "%";
  },
  showResult: function () {
    totalInput1.value = this.screenPrice;
    totalInput2.value = this.countScreens;
    totalInput3.value =
      this.servicePricesPercent + this.servicePricesNumber;
    totalInput4.value = this.fullPrice;
    totalInput5.value = this.servicePercentPrice;
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
    otherItemsPercent.forEach( (item) => {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        this.servicesPercent[label.textContent] = +input.value;
      }
    });

    otherItemsNumber.forEach( (item) => {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        this.servicesNumber[label.textContent] = +input.value;
      }
    });
  },

  addScreensBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);
  },

  addPrices: function () {

    for (let screen of this.screens) {
      this.screenPrice += +screen.price;
      this.countScreens += +screen.count;
    }

    for (let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key];
    }

    for (let key in this.servicesPercent) {
      this.servicePricesPercent +=
        this.screenPrice * (this.servicesPercent[key] / 100);
    }

    this.fullPrice =
      +this.screenPrice +
      this.servicePricesNumber +
      this.servicePricesPercent;

    this.servicePercentPrice =
      this.fullPrice -
      this.fullPrice * (parseInt(appData.rollback) / 100);
  },

  // logger: function () {
  //   for (let key in appData) {
  //     if (typeof appData[key] === "function") {
  //       console.log("key: ", key);
  //     } else {
  //       console.log("key: ", key);
  //     }
  //   }
  // },
};

appData.init();
