import { randomUUID } from "crypto";
import Role from "./Roles/Role";
import { ref, set } from "firebase/database";
import { database } from "../config/firebase";

export default class Player {
  public id: string = "";
  public name: string = "";
  public isReady: boolean = false;
  public role?: Role;

  constructor(name: string) {
    this.id = randomUUID();
    this.name = name;

    this.sync();
  }

  rename(newName: string) {
    this.name = newName;

    this.sync();
  }

  setRole(role: Role) {
    this.role = role;

    this.sync();
  }

  toggleReadiness() {
    this.isReady = !this.isReady;

    this.sync();
  }

  clear() {
    this.isReady = false;
    this.role = undefined;

    this.sync();
  }

  delete() {
    set(ref(database, "players/" + this.id), null);
  }

  sync() {
    let playerData: PlayerData = {
      name: this.name,
      isReady: this.isReady,
      role: this.role ? this.role.name : "",
    };

    set(ref(database, "players/" + this.id), playerData);
  }
}

export interface PlayerData {
  name: string;
  isReady: boolean;
  role: string;
}
