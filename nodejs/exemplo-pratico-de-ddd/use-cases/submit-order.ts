import { OrdersRepository } from "../repositories/orders-repository";
import { Order } from "../domain/purchases/order";

interface SubmitOrderRequest {
  customerDocument: string;
  total: number;
}

export class SubmitOrder {
  constructor(
    private orderRepository: OrdersRepository
  ) { }

  async execute({ customerDocument, total }: SubmitOrderRequest) {
    const order = new Order(total, customerDocument);

    // Persistir no banco de dados

    await this.orderRepository.create(order);
  }
}