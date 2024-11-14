// Desacoplando componentes

// 1. Quando eu tenho algo repetitivo
// 2. Quando eu consigo isolar algo do seu contexto (sem prejudicar o comportamento original)

// Neste caso, é possível isolar a lógica do Footer e reutilizá-lo
export function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      ...
      <footer>
        Copyright &copy; Rocketseat {currentYear}
      </footer>
    </div>
  )
}

// Para isso, criamos um componente Footer
export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      Copyright &copy; Rocketseat {currentYear}
    </footer>
  )
}

// E utilizamos ele no App
export function App() {
  return (
    <div>
      ...
      <Footer />
    </div>
  )
}