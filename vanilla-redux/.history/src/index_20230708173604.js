import { legacy_createStore as createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const reducer = () => {};

const store = createStore(reducer);

let count = 0;

number.innerText = count;

const uppdateText = () => {
  number.innerText = count;
};

const handleplus = () => {
  count = count + 1;
  uppdateText();
};

const handleminus = () => {
  count = count - 1;
  uppdateText();
};

plus.addEventListener("click", handleplus);
minus.addEventListener("click", handleminus);
