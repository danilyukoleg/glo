let title = "Типы данных";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 15;
let rollback = 33;
let fullPrice = 50000;
let adaptive = false;

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
console.log(rollback * (fullPrice / 100));
