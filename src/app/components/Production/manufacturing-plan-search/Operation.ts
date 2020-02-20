export class Operation {
  operationId: string;
  name: string;
  toolName: string;
  operationName: string;
  operationTime: string;
  preparationTime: string;
}

export class ManufacturinPlan {
  id: string;
  Name: string;
  operations: Operation[];
}

export class Name {
  name: string;
}

