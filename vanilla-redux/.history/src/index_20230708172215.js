const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const handleplus = () => {
  console.log(number.value);
};

const handleminus = () => {};

plus.addEventListener("click", handleplus);
minus.addEventListener("click", handleminus);
