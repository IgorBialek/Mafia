export default class Role {
  public type: Roles | null = null;

  constructor(type: Roles) {
    this.type = type;
  }
}

export enum Roles {
  Doctor = "Doctor",
  Inhabitant = "Inhabitant",
  Mafia = "Mafia",
  Policeman = "Policeman",
}
