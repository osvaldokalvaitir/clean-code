// Componentes puros

// Componentes puros são aqueles que se passarem o mesmo parâmetro, sempre retornam o mesmo resultado
// Ao desacoplar componentes, cuidado em levar a lógica junto com componente, fazendo com que o componente não fique reutilizável

// Fazendo dessa maneira o componente não é puro e não é reutilizável
export function Header() {
  function createTodo() {
    // chamada para API
  }

  return (
    <header>
      <h1>My new revolation to-do list app!</h1>

      <button onClick={createTodo}> Add new Todo</button>
    </header>
  )
}

// Fazendo dessa maneira o componente é puro e reutilizável
interface HeaderProps {
  onCreateNewTodo: () => void;
}

export function Header({ onCreateNewTodo }: HeaderProps) {
  return (
    <header>
      <h1>My new revolation to-do list app!</h1>

      <button onClick={onCreateNewTodo}> Add new Todo</button>
    </header>
  )
}

// Importando o componente Header
export function App() {
  const [todos, setTodo] = useState<string[]>([]);

  useEffect(() => {
      // carregar uma lista de to-dos do back-end
  }, [])

  function handleCreateNewTodo() {

  }

  return (
    <div>
      <Header onCreateNewTodo={handleCreateNewTodo} />
      ...
    </div>
  )
}   
