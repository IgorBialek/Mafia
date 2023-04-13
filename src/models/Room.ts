import { randomUUID } from "crypto";
import { MAX_ROOM_SIZE, MIN_ROOM_SIZE } from "../lib/constants";
import Game from "./Game";

export default class Room {
  public size: number = 0;
  public players: { [playerId: string]: boolean } = {};
  public owner: string = "";
  public game: string = "";

  constructor(owner: string, size?: number) {
    this.owner = owner;

    if (size && size >= MIN_ROOM_SIZE && size <= MAX_ROOM_SIZE) {
      this.size = size;
    } else {
      this.size = 10;
    }
  }
}
