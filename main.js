/* Nullish Coalescing Operator

const idade = 0;  // A variável idade é definida como 0

// Utilizamos o operador de coalescência nula (??) para definir um valor padrão caso idade seja null ou undefined
document.body.innerText = "Sua idade é: " + (idade ?? "Não informado");
// Como idade é 0 (um valor válido), o resultado será "Sua idade é: 0"


// Object 

const user = {
  name: "Vini",  // Propriedade name do objeto user
  nickname: "Gustavo",  // Propriedade nickname do objeto user
  idade: 19,  // Propriedade idade do objeto user
  address: {  // Propriedade address do objeto user, que é um objeto aninhado
    street: "Rua Teste",  // Propriedade street do objeto address
    number: 176,  // Propriedade number do objeto address
  },
};


// Destructuring 

const { address, idade: age, nickname = "Borges" } = user;
// Desestruturamos o objeto user para extrair address, idade (renomeada para age) e nickname
// Se nickname não estivesse definido, ele receberia o valor padrão "Borges"

document.body.innerText = JSON.stringify({ address, age, nickname });
// Convertemos o objeto com as propriedades extraídas em uma string JSON e a exibimos no corpo do documento


// Rest Operator 

const { name, idade, ...rest } = user;
// Extraímos name e idade do objeto user, e o operador rest captura o restante das propriedades em um novo objeto rest

const array = [1, 2, 3, 4, 5];

const [first, , third, ...restArray] = array;
// Extraímos o primeiro (first) e o terceiro (third) elementos do array
// O operador rest captura o restante dos elementos em um novo array restArray

document.body.innerText = JSON.stringify({ first, third, restArray });
// Convertemos o objeto com as propriedades extraídas em uma string JSON e a exibimos no corpo do documento


//Short Syntax 

const name = "Vini";  // Definimos a variável name
const age = 19;  // Definimos a variável age

const user = {
  name,  // Utilizamos a sintaxe curta para definir a propriedade name do objeto user
  age,  // Utilizamos a sintaxe curta para definir a propriedade age do objeto user
};

document.body.innerText = JSON.stringify(user);
// Convertemos o objeto user em uma string JSON e a exibimos no corpo do documento


// Optional Chaining

// Definição do objeto 'user' que armazena informações sobre um usuário
const user = {
  name: "Vini", // Nome do usuário
  nickname: "Gustavo", // Apelido do usuário
  idade: 19, // Idade do usuário
  address: { // Objeto aninhado 'address' que armazena informações sobre o endereço do usuário
    street: "Rua Teste", // Nome da rua
    number: 176, // Número do endereço
    zip: { // Objeto aninhado 'zip' que armazena informações sobre o código postal
      code: "39100000", // Código postal
      city: "Minas Gerais", // Cidade
    },
    // Método 'showFullAdreess' que retorna uma mensagem
    showFullAdreess() {
      return "ok";
    },
  },
};

// Chave para acessar uma propriedade específica do objeto 'user'
const key = "name";

// Define o conteúdo de texto do corpo do documento HTML para o valor da propriedade correspondente à chave 'name' no objeto 'user'
document.body.innerText = user[key];

// Métodos de Array

// Cria um array com os números de 1 a 5
const array = [1, 2, 3, 4, 5];

// Itera sobre cada elemento do array e adiciona ao conteúdo do body do documento
for (const i of array) {
  document.body.innerText += i;
} 

// Cria um novo array vazio
const novoArray = [];

// Itera sobre cada elemento do array, multiplica por 2 e adiciona ao novo array
array.forEach((item) => {
  novoArray.push(item * 2);
});

// Define o conteúdo do body como o novo array convertido em string
document.body.innerText = JSON.stringify(novoArray);

// Cria um novo array com os elementos do array original, multiplicando por 10 se forem pares
const novoArray = array.map((item) => {
  if (item % 2 === 0) {
    return item * 10;
  }

  return item;
});

// Define o conteúdo do body como o novo array convertido em string
document.body.innerText = JSON.stringify(novoArray);

// Cria um novo array contendo apenas os números pares do array original multiplicados por 10
const novoArray = array
.filter(item => item % 2 === 0)
.map(item => item * 10)

// Define o conteúdo do body como o novo array convertido em string
document.body.innerText = JSON.stringify(novoArray);

// Verifica se todos os itens do array são números
const todosItensSaoNumeros = array.every((item) => {
  return typeof item === "number";
});

// Define o conteúdo do body como o resultado da verificação convertido em string
document.body.innerText = JSON.stringify(todosItensSaoNumeros);

// Verifica se pelo menos um item do array não é um número
const peloMenosUmItemNaoEUmNumero = array.some((item) => {
  return typeof item != "number";
});

// Define o conteúdo do body como o resultado da verificação convertido em string
document.body.innerText = JSON.stringify(peloMenosUmItemNaoEUmNumero); 

// Encontra o primeiro número par no array
const par = array.find(item => item % 2 === 0)

// Define o conteúdo do body como o número par encontrado convertido em string
document.body.innerText = JSON.stringify(par);

// Encontra o índice do primeiro número par no array
const par = array.findIndex(item => item % 2 === 0)

// Define o conteúdo do body como o índice do número par encontrado convertido em string
document.body.innerText = JSON.stringify(par); 

// Soma todos os elementos do array
const soma = array.reduce((acc, item) => {
  return acc + item
}, 0);

// Define o conteúdo do body como a soma dos elementos do array convertido em string
document.body.innerText = JSON.stringify(soma);

// Template Literals

// Cria uma string vazia para o nome
const name = "";
// Cria uma mensagem de boas-vindas, usando "Visitante" se o nome estiver vazio
const message = `Bem-Vindo, ${name ? name : "Visitante"}`;

// Define o conteúdo do body como a mensagem de boas-vindas
document.body.innerText = message; 

// Promises

// Função que soma dois números após 2 segundos, usando uma Promise
const somaDoisNumeros = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

// Chama a função de soma, e define o conteúdo do body como a soma resultante
somaDoisNumeros(1, 4)
  .then((soma) => {
    document.body.innerText = soma;
  })
  .catch((err) => {
    console.log(err);
  });

// Faz uma requisição à API do GitHub para obter dados de um usuário
fetch("https://api.github.com/users/diego3g")
  .then((response) => {
    return response.json();
  })
  .then((body) => {
    console.log(body);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Deu");
  });

// Função assíncrona que busca dados de um usuário no GitHub
async function buscaDadosNoGithub() {
  try {
    const response = await fetch("https://api.github.com/users/diego3g");
    const body = await response.json();

    return body.name;
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Deu");
  }
}

// Chama a função assíncrona e loga o nome do usuário no console
const name = buscaDadosNoGithub().then((name) => {
  console.log(name);
});
*/
