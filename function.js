let bata, orin, dent, camp, total;
bata = document.getElementById("shopping__1");
orin = document.getElementById("shopping__2");
dent = document.getElementById("shopping__3");
camp = document.getElementById("shopping__4");
total = document.getElementById("totalPriceDiv");

let num1, num2, num3, num4;
num1 = document.getElementById("num1");
num2 = document.getElementById("num2");
num3 = document.getElementById("num3");
num4 = document.getElementById("num4");

let price1, price2, price3, price4, totalPrice;
price1 = document.getElementById("price1");
price2 = document.getElementById("price2");
price3 = document.getElementById("price3");
price4 = document.getElementById("price4");
totalPrice = document.getElementById("totalPrice");

var count1, count2, count3, count4;
count1 = 0;
count2 = 0;
count3 = 0;
count4 = 0;
var as1, as2;

function addChart(x) {
  total.style.display = "grid";
  if (x == 1) {
    bata.style.display = "grid";
    count1++;
    num1.value = count1;
    price1.value = count1 * 25;
  } else if (x == 2) {
    orin.style.display = "grid";
    count2++;
    num2.value = count2;
    price2.value = count2 * 30;
  } else if (x == 3) {
    dent.style.display = "grid";
    count3++;
    num3.value = count3;
    price3.value = count3 * 300;
  } else if (x == 4) {
    camp.style.display = "grid";
    count4++;
    num4.value = count4;
    price4.value = count4 * 4;
  }
  sumarTodo(price1.value, price2.value, price3.value, price4.value);
}

function sumarTodo(q, w, e, r) {
  if (q) {
    q = parseInt(price1.value);
  } else {
    q = 0;
  }
  if (w) {
    w = parseInt(price2.value);
  } else {
    w = 0;
  }
  if (e) {
    e = parseInt(price3.value);
  } else {
    e = 0;
  }
  if (r) {
    r = parseInt(price4.value);
  } else {
    r = 0;
  }
  totalPrice.value = q + w + e + r;
}
