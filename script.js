const advertising = document.querySelector(".adv");
const book = document.querySelectorAll(".book");
const body = document.querySelector("body");
const title = document.querySelectorAll("h2 a");
const ulList = document.querySelectorAll("ul li");
const li = document.createElement("li");

const getAdvertising = function () {
  advertising.remove();
};

const getBackgroundBody = function () {
  body.style.backgroundImage = "url(image/you-dont-know-js.jpg)";
};

const getInnetHtml = function () {
  title[4].innerHTML = "Книга 3. this и Прототипы Объектов";
};

const getBooks = function () {
  book[0].insertAdjacentElement("beforebegin", book[1]);
  book[2].insertAdjacentElement("beforebegin", book[4]);
  book[2].insertAdjacentElement("beforebegin", book[3]);
  book[2].insertAdjacentElement("beforebegin", book[5]);
};

const getList = function () {
  ulList[3].after(ulList[6]);
  ulList[6].after(ulList[8]);
  ulList[9].after(ulList[2]);

  ulList[47].after(ulList[55]);
  ulList[55].after(ulList[49]);
  ulList[49].after(ulList[50]);
  ulList[50].after(ulList[50]);
};

const getCreatElement = function () {
  li.innerText = "Глава 8: За пределами ES6";

  ulList[25].append(li);
};
getList();
getBooks();
getBackgroundBody();
getInnetHtml();
getAdvertising();
getCreatElement();

console.log(ulList);

