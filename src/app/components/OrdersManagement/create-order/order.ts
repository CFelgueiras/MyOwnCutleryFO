export class Order {
  // tslint:disable-next-line:variable-name
  id_product: string;
  quantity: string;
  deliveryDateRequested: string;
  client_id: string;
}
export class Client3 {
  _id: string;
  name: string;
  email: string;
  address: string;
}

export class Users {
  users: Client3[];
}
