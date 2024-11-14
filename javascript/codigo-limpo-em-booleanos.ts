// Código limpo em boleanos

// Sempre escrever como se fosse uma pergunta 
// com resposta Sim ou Não

// Errado
const userMajority = true;

// Correto
const isUserOnMajority = true; 

// is, does, has

// Errado
const disabled = true;

// Correto
const isDisabled = true;
const userHasGroup = true;

if (isUserOnMajority) {

}

// Booleans sempre como perguntas / semântico

// Errado
const loading = true;

// Correto
const isLoading = true;

// evitar variáveis genéricas: loading, disabled, data, fetching, list

const isUserProfileDisabled = true;
const isUserProfileLoading = true;

// Errado
// if loading

// Correto
// if is user profile loading