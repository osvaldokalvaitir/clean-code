// Condicionais no render

// Evitar fazer condicionais dentro do HTML

// Errado
return (
  ...
  { todo.length === 0 && (<p>Nenhum todo cadastrado.</p>) }
  ...
)

// Correto
const isTodoListEmpty = todos.length === 0;

return (
  ...
  { isTodoListEmpty && (<p>Nenhum todo cadastrado.</p>) }
  ...
)