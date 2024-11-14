// Nomenclatura de variáveis 

const users = ['Diego', 'Mayk', 'Rodrigo'];

// Evitar diminutivos e adicionar nomes mais descritivos

// Errado:
const filtered = users.filter((u) => {
    return u.startWith('D');
});

// Correto: 
const usersStartingWithLetterD = users.filter((user) => {
    return user.startWith('D');
});

// Evite nomes genéricos (data, response, list, args, params)

// Errado
function getUsers() {
    const data = getUsersFromDataBase();

    return data;
}

// Correto
function getUsers() {
    const users = getUsersFromDataBase();

    return users;
}