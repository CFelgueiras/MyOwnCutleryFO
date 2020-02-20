export class Machine {
  machineId: string;
  identification: string;
  brand: string;
  model: string;
  localization: string;
  capacity: string;
}

export class MachineType {

  machineTypeId: string;
  name: Name;
  Machines: Machine[];
}

export class Name {
  name: string;
}
