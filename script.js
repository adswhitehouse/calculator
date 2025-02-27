// Variables
let ac = document.querySelector(".jsAC");
let de = document.querySelector(".jsDE");
let point = document.querySelector(".jsPoint");
let divide = document.querySelector(".jsDivide");
let seven = document.querySelector(".js7");
let eight = document.querySelector(".js8");
let nine = document.querySelector(".js9");
let multiply = document.querySelector(".jsMultiply");
let four = document.querySelector(".js4");
let five = document.querySelector(".js5");
let six = document.querySelector(".js6");
let minus = document.querySelector(".jsMinus");
let one = document.querySelector(".js1");
let two = document.querySelector(".js2");
let three = document.querySelector(".js3");
let add = document.querySelector(".jsAdd");
let doubleZero = document.querySelector(".js00");
let zero = document.querySelector(".js0");
let equals = document.querySelector(".jsEquals");
let calculation = document.querySelector(".jsCalculation");

// Click listeners
ac.addEventListener("click", () => {
  calculation.value = "";
});
de.addEventListener("click", () => {
  calculation.value = calculation.value.slice(0, -1);
});
point.addEventListener("click", () => {
  calculation.value += point.value;
});
divide.addEventListener("click", () => {
  calculation.value += divide.value;
});
seven.addEventListener("click", () => {
  calculation.value += seven.value;
});
eight.addEventListener("click", () => {
  calculation.value += eight.value;
});
nine.addEventListener("click", () => {
  calculation.value += nine.value;
});
multiply.addEventListener("click", () => {
  calculation.value += multiply.value;
});
four.addEventListener("click", () => {
  calculation.value += four.value;
});
five.addEventListener("click", () => {
  calculation.value += five.value;
});
six.addEventListener("click", () => {
  calculation.value += six.value;
});
minus.addEventListener("click", () => {
  calculation.value += minus.value;
});
one.addEventListener("click", () => {
  calculation.value += one.value;
});
two.addEventListener("click", () => {
  calculation.value += two.value;
});
three.addEventListener("click", () => {
  calculation.value += three.value;
});
add.addEventListener("click", () => {
  calculation.value += add.value;
});
doubleZero.addEventListener("click", () => {
  calculation.value += doubleZero.value;
});
zero.addEventListener("click", () => {
  calculation.value += zero.value;
});
equals.addEventListener("click", () => {
  calculation.value = eval(calculation.value);
});
