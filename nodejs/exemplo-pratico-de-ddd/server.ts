import { SubmitOrder } from "./use-cases/submit-order";
import { PostOrdersRepository } from "./repositories/postgres/postgres-order-repository";

const submitOrder = new SubmitOrder(
  new PostOrdersRepository()
)

// SubmitOrder.execute()