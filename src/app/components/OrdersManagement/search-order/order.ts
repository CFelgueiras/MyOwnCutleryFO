export class Order {
  orderStatus: string;
  _id: string;
  quantity: string;
  deliveryDateRequested: string;
  requestDate: string;
  createdAt: string;
  updatedAt: string;
  id_product: string;
  client_id: string;
  __v: string;
}

export class Orders {
  orders: Order[];
}

export class Client4 {
  _id: string;
  name: string;
  email: string;
  address: string;
}

