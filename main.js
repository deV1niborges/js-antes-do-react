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
*/

// Métodos de Array
