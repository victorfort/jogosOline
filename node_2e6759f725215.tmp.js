const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Informe um número maior que 2: ', (number) => {
  if (parseInt(number) > 2) {
    console.log(`O número ${number} é maior que 2.`);
  } else {
    console.log(`O número ${number} não é maior que 2.`);
  }
  rl.close();
});
