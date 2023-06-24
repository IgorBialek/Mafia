import Role, { Roles } from "./Role";

export default class Policeman extends Role {
  constructor(type: Roles) {
    super(type);
  }
}
