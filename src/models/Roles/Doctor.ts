import Role, { Roles } from "./Role";

export default class Doctor extends Role {
  constructor(type: Roles) {
    super(type);
  }
}
