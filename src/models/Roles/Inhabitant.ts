import Role, { Roles } from "./Role";

export default class Inhabitant extends Role {
  constructor(type: Roles) {
    super(type);
  }
}
