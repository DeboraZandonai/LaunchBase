const name = "Debora";
const weidht = 50;
const height = 1.59;

const imc = weidht / (height * height);

let message = "";

if (imc >= 30) {
  message = `${name}, você está acima do peso.`;
} else {
  message = `${name}, este peso está ideal.`;
}

console.log(message);
