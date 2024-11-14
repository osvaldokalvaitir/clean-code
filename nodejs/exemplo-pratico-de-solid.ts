// Exemplo prático de SOLID

// billet, cred, debit

// Essa classe usa o SRP, pois só calcula o desconto do pedido
class CalculateOrderDiscount {
  public execute(amount: number, installments: number, paymentMethod: string) {
    if (paymentMethod === 'billet') {
      return amount * 0.01;
    }

    if (paymentMethod === 'credit') {
      if (installments === 1) {
        return amount * 0.05;
      } 

      if (installments <= 6) {
        return amount * 0.02;
      } 

      return 0;
    }

    if (paymentMethod === 'credit') {
      return amount * 0.05;
    }

    return 0;
  }
}

class SubmitOrderInvoice {
  public execute() {
      // emissão da nota
  }
}

class CreateOrder {
  public execute() {
      // CalculateOrderDiscount
      //SubmitOrderInvoice
  }
}

------------------------------------------

// Usando a classe acima com o OCP, que não modifica mas sim estende

// Usando ISP, que é a segregação de interfaces, pois a interface Card só é
// usada por Credit e Debit
interface Card {
  number: number;
  cvv: number;
  expiration: number;
}

interface PaymentMethod {
  getDiscountAmout:(amount: number) => number;
}

class Billet implements PaymentMethod {
  getDiscountAmout(amount): number {
    return amount * 0.05;
  }
}

class Credit implements PaymentMethod, Card {
  private installments: number; 

  constructor(installments: number) {
      this.installments = installments;
  }

  getDiscountAmout(amount): number {
    if(this.installments === 1) {
      return amount * 0.05;
    } 

    if(this.installments <= 6) {
      return amount * 0.02;
    } 

    return 0;
  }
}

class debit implements PaymentMethod, Card {
  getDiscountAmout(amount): number {
      return amount * 0.05;
  }
}

class CalculateOrderDiscount {
  private paymentMethod: PaymentMethod;
  
  constructor(paymentMethod: PaymentMethod) {
      this.paymentMethod = paymentMethod;
  }

  // Usando LSP, que pode substituir uma dependência,
  // exemplo: paymentMethod por uma outra classe que estende algo semelhante.
  // pode passar qualquer classe Billet, Debit ou Credit 
  // para o paymentMethod que todas irão funcionar
  public execute(amount: number) {
      return this.paymentMethod.getDiscountAmout(amount);
  }
}

// Usando DIP, que é a inversão de dependência
// Quando a classe é chamada é no momento que é enviado a dependência.
// Quem chama que diz qual é a dependência.
const calculateOrderDiscount = new CalculateOrderDiscount(new Billet());

calculateOrderDiscount.execute(2000);