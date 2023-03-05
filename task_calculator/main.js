const calcGasoline = () => {
  const price = Number(document.getElementById("price").value);

  const money = +document.querySelector("#money").value; // + represents number.
  const answer = document.querySelector("#answer");

  let text;

  const amount = Math.floor(money / price); //Math.floor for round up!!

  if (amount >= 10) {
    text = `You could get about ${amount} litres, good now you can go`;
  } else {
    text = `You could get about ${amount} litres. Sorry you have to stay :()`;
  }

  answer.textContent = text;
  // OR document.querySelector('#answer').textContent = 'something';
};

const tempConverter = (id, value) => {
  const val = parseFloat(value);

  console.log(id, value);

  const celsiusInput = document.querySelector("#celsius");
  const farenheitInput = document.querySelector("#fahrenheit");
  const kelvinInput = document.querySelector("#kelvin");

  if (id === "celsius") {
    farenheitInput.value = (val * 1.8 + 32).toFixed(2);
    kelvinInput.value = (val + 273.15).toFixed(2);
  }

  if (id === "fahrenheit") {
    celsiusInput.value = ((val - 32) / 1.8).toFixed(2);
    kelvinInput.value = ((val - 32) / 1.8 + 273.15).toFixed(2);
  }

  if (id === "kelvin") {
    celsiusInput.value = (val - 273.15).toFixed(2);
    farenheitInput.value = ((val - 273.15) * 1.8 + 32).toFixed(2);
  }
};
