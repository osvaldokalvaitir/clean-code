// Princípios de SOLID

// SOLID

- SRP
- OCP
- LSP
- ISP
- DIP

// SRP: Single Responsiblity Principle
// Cada parte da aplicação deve ser responsável por uma única ação
// Como identificar o não uso: Ao analisar um método, classe, entidade e identificar que há mais de uma ação. Exemplo: Método que cria um usuário e envia um e-mail para esse usuário. Nesse caso, o método não está seguindo o princípio.

// OCP: Open-Closed Principle
// As classes, entidades, métodos da aplicação devem estar abertas para extensão e nunca para modificação. Deve ser possível adicionar comportamento na classe, porém, nunca modificar um comportamento que já existe.
// Como identificar o não uso: Quando há partes no código em que há condicionais e facilmente terá que adicionar mais ifs no futuro. Exemplo: Cálculo de frete, se a transportadora for correios, então faz um cálculo. Ao entrar uma nova transportadora, adicionar mais uma condicional. Há uma modificação na classe original a cada nova regra necessária.
// Deveria se extender a classe original com uma nova opção.

// LSP: Liskov Substitution Principle
// Princípio totalmente atrelado com outros princípios como: OCP e DIP.
// Deve ser possível substituir uma dependência de uma classe por outra, desde que tenham o mesmo formato.

// ISP: Interface Segregation Principle
// Instrui o código mais fácil de receber mais manutenção
// Separar as interfaces (Regras que uma classe precisa seguir)

// DIP: Dependency Inversion Principle
// Princípio totalmente conectado com o LSP
// As dependências (algo que vem de fora da classe) de uma classe devem ser injetadas, inversa ao modelo tradicional.

-----------------------
// Exemplo de ISP

// Forma tradicional de criar interfaces
interface PrinterInterface {
  print: () => void;
  scan: () => void;
}

class PrinterWithOneInterface implements PrinterInterface {
  print: () => void;
  scan: () => void;
}

// Forma de segregar interfaces
interface PinterWithScan {
  scan: () => void;
}

interface BasicPrinter {
  print: () => void;
}

class Printer implements BasicPrinter, PinterWithScan {
  scan: () => void;
  print: () => void;
}

-----------------------
// Exemplo de DIP

// Forma tradicional de injetar dependências
import { createUserOnDatabase } from 'db';

function createdUser() {
    createUserOnDatabase();
}

// Utilizando o princípio DIP, a função não importa a dependência, apenas recebe por parâmetro
function createdUser(
    createdUserOnDatabase: () => void
) {
    createdUserOnDatabase();
}

// Função que será passada como dependência
import { createUserOnDatabase } from 'db';

// Ao chamar a função necessita passar como parâmetro as dependências 
createdUser(createUserOnDatabase);