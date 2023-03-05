const form = document.querySelector("form");

const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const directions = document.querySelectorAll("input[name='direction']");
const text = document.querySelector("#cssCode");

const myFunction = () => {
  console.log("color one", color1);
  console.log("color two", color2);

  let dirValue, code;

  for (const item of directions) {
    if (item.checked) {
      dirValue = item.value;
    }
  }

  code = `linear-gradient(${dirValue}, ${color1.value}, ${color2.value})`;

  document.body.style.background = code;
  text.textContent = code;

  //   document.body.style.backgroundImage = `linear-gradient(${dirValue}, ${color1.value}, ${color2.value})`;

  //   document.body.style.backgroundImage = `linear-gradient(${color1.value}, ${color2.value})`;     changes color for only once!
};

form.addEventListener("change", myFunction);
