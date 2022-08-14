"use strict";
let week = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
let toDay = new Date().getDay() - 1;
for (let i = 0; i < week.length; i++) {
  if (i == toDay) {
    if (week[i] == "сб" || week[i] == "вс") {
      document.write(`<p><b><i>${week[i]}</i></b></p>`);
    } else {
      document.write(`<p><b>${week[i]}</b></p>`);
    }
  } else if (week[i] == "сб" || week[i] == "вс") {
    document.write(`<p><i>${week[i]}</i></p>`);
  } else {
    document.write(`<p>${week[i]}</p>`);
  }
}
