// Parâmetros e desestruturação

// Rota para criação do usuário (name, email, password)

// Controller (name, email, password)

// Repository (name, email, password)

// Sem desestruturação
function createUserRoute(body) {
  // validações
  
  createUserController(body);
}
  
function createUserController(data) {
  userRepository.create(data);
}
  
function userRepository = {
  create(data) {
    // criar usuário (name, email,  password)
  }
}
  
// Com desestruturação
function createUserRoute(body) {
  const { name, email, password } = body;
      
  createUserController({ name, email, password });
}

function createUserController(data) {
  const { name, email, password } = data;

  userRepository.create({
    name,
    email,
    password,
  });
}

// Receber objetos ao invés de múltiplos parâmetros
  
// Utilize parâmetros nomeados

// Errado
createUserRoute(body, params);

createUserRoute({ name, email, password }, { id: 1 });
createUserRoute(null, { id: 1 });

// Correto
createUserRoute({ body, params });

createUserRoute({
  body: { name, email, password },
  params: { id: 1 }
});
createUserRoute({
  params: { id: 1 }
})