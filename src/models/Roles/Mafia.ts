import Role, { Roles } from "./Role";

export default class Mafia extends Role {
  constructor(type: Roles) {
    super(type);
  }
}
